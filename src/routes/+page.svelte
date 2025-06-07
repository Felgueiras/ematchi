<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';
	import { getCustomLevels } from './customLevels';
	import { confetti } from '@neoconfetti/svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';
	let customLevels: any[] = [];
	let game: Game;

	onMount(() => {
		// Check if there's a level to play from the editor
		const levelToPlay = localStorage.getItem('levelToPlay');
		if (levelToPlay) {
			try {
				const level = JSON.parse(levelToPlay);
				localStorage.removeItem('levelToPlay');
				game.start(level);
			} catch (error) {
				console.error('Error loading level to play:', error);
			}
		}

		// Load custom levels initially and refresh when state changes
		loadCustomLevels();
	});

	// Reload custom levels when waiting state is reached
	$: if (state === 'waiting') {
		loadCustomLevels();
	}

	function loadCustomLevels() {
		customLevels = getCustomLevels();
	}

	function openEditor() {
		goto('/editor');
	}
</script>

<Game
	bind:this={game}
	on:play={() => {
		state = 'playing';
	}}
	on:pause={() => {
		state = 'paused';
	}}
	on:win={() => {
		state = 'won';
	}}
	on:lose={() => {
		state = 'lost';
	}}
/>

{#if state === 'won'}
	<div
		class="confetti"
		use:confetti={{
			stageWidth: innerWidth,
			stageHeight: innerHeight
		}}
	/>
{/if}

{#if state !== 'playing'}
	<Modal>
		<header>
			<h1>e<span>match</span>i</h1>
			<p>the emoji matching game</p>
		</header>
		{#if state === 'won' || state === 'lost'}
			<p>you {state} the game!</p>
		{:else if state === 'paused'}
			<p>game paused</p>
		{:else if state === 'waiting'}
			<p>choose a level</p>
		{/if}

		<div class="buttons">
			{#if state === 'paused'}
				<button
					on:click={() => {
						game.resume();
						state = 'playing';
					}}>resume</button
				>
				<button
					on:click={() => {
						state = 'waiting';
					}}>quit</button
				>
			{:else}
				{#each levels as level}
					<button
						on:click={() => {
							game.start(level);
						}}>{level.label}</button
					>
				{/each}
				{#each customLevels as level}
					<button
						class="custom-level"
						on:click={() => {
							game.start(level);
						}}>{level.label}</button
					>
				{/each}
				<button on:click={openEditor} class="editor-button">Level Editor</button>
			{/if}
		</div>
	</Modal>
{/if}

<style>
	h1 {
		font-size: 4em;
	}

	h1 span {
		color: purple;
	}

	p {
		font-family: Grandstander;
	}

	.confetti {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 50%;
		top: 30%;
		pointer-events: none;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		gap: 1em;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
	}

	.buttons button {
		margin: 0;
		padding: 0.75em 2em;
		font-size: 1.25em;
		cursor: pointer;
		border-radius: 2em;
	}

	.custom-level {
		background: #059669 !important;
		color: white !important;
	}

	.editor-button {
		background: #6b46c1 !important;
		color: white !important;
	}
</style>
