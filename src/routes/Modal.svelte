<script lang="ts">
	import { onMount } from 'svelte';
	import { listCustomLevels, deleteCustomLevel, getCustomLevel } from './levels';
	import { validateInput, showError } from './utils';

	let customLevels = [];
	let selectedLevel = null;

	onMount(() => {
		customLevels = listCustomLevels();
	});

	function editLevel(level) {
		selectedLevel = level;
	}

	function deleteLevel(level) {
		deleteCustomLevel(level.label);
		customLevels = listCustomLevels();
	}
</script>

<div class="modal-background">
	<div class="modal">
		<slot />
		{#if customLevels.length > 0}
			<h2>Custom Levels</h2>
			<ul>
				{#each customLevels as level}
					<li>
						<span>{level.label}</span>
						<button on:click={() => editLevel(level)}>Edit</button>
						<button on:click={() => deleteLevel(level)}>Delete</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.modal-background {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		display: grid;
		place-items: center;
		z-index: 999;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5em 0;
		border-bottom: 1px solid #ccc;
	}

	li button {
		margin-left: 0.5em;
		background: #dc3545;
	}

	li button:hover {
		background: #c82333;
	}
</style>
