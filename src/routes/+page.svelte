<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';
	import { getAllLevels, levels } from './levels';
	import { confetti } from '@neoconfetti/svelte';
	import { onMount } from 'svelte';

	let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting';
	let allLevels = levels;
	let customLevels = [];
	let game: Game;

	onMount(() => {
		// Load all levels including custom ones
		allLevels = getAllLevels();

		// Extract just the custom levels for display
		const predefinedLabels = levels.map((l) => l.label);
		customLevels = allLevels.filter((l) => !predefinedLabels.includes(l.label));
	});

	// Function to delete a custom level
	function deleteCustomLevel(label: string) {
		if (confirm(`Are you sure you want to delete the level "${label}"?`)) {
			try {
				const savedLevels = JSON.parse(localStorage.getItem('customLevels') || '[]');
				const updatedLevels = savedLevels.filter((level) => level.label !== label);
				localStorage.setItem('customLevels', JSON.stringify(updatedLevels));

				// Update the displayed levels
				allLevels = getAllLevels();
				const predefinedLabels = levels.map((l) => l.label);
				customLevels = allLevels.filter((l) => !predefinedLabels.includes(l.label));
			} catch (e) {
				console.error('Error deleting custom level', e);
			}
		}
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
				<div class="level-section">
					<h3>Predefined Levels</h3>
					<div class="level-buttons">
						{#each levels as level}
							<button
								on:click={() => {
									game.start(level);
								}}>{level.label}</button
							>
						{/each}
					</div>
				</div>

				{#if customLevels.length > 0}
					<div class="level-section">
						<h3>Custom Levels</h3>
						<div class="level-buttons">
							{#each customLevels as level}
								<div class="custom-level-container">
									<button
										on:click={() => {
											game.start(level);
										}}>{level.label}</button
									>
									<button class="delete-button" on:click={() => deleteCustomLevel(level.label)}
										>×</button
									>
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<div class="level-section editor-section">
					<a href="/editor" class="editor-button">Create Custom Level</a>
				</div>
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
		flex-direction: column;
		gap: 1em;
		align-items: center;
		margin-top: 2em;
	}

	.level-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h3 {
		margin-bottom: 0.5em;
		color: #333;
	}

	.level-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
	}

	.buttons button {
		margin: 0;
		padding: 0.75em 2em;
		font-size: 1.25em;
		cursor: pointer;
		border-radius: 2em;
	}

	.custom-level-container {
		position: relative;
		display: inline-block;
	}

	.delete-button {
		position: absolute;
		top: -10px;
		right: -10px;
		width: 25px;
		height: 25px;
		padding: 0;
		border-radius: 50%;
		background-color: #ff4d4f;
		color: white;
		font-size: 1.2em;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border: none;
	}

	.editor-section {
		margin-top: 2em;
	}

	.editor-button {
		display: inline-block;
		padding: 0.75em 2em;
		font-size: 1.25em;
		cursor: pointer;
		border-radius: 2em;
		background-color: purple;
		color: white;
		text-decoration: none;
		text-align: center;
	}
</style>
