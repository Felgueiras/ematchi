<script lang="ts">
	import { onMount } from 'svelte';
	import { saveCustomLevel, listCustomLevels, deleteCustomLevel, getCustomLevel } from '../levels';
	import { validateInput, showError } from '../utils';
	import EmojiPicker from 'emoji-picker-element/svelte';

	let gridSize = 4;
	let timer = 60;
	let emojis: string[] = [];
	let customLevels = [];
	let levelName = '';
	let selectedLevel = null;

	onMount(() => {
		customLevels = listCustomLevels();
	});

	function addEmoji(event) {
		const emoji = event.detail.unicode;
		if (!emojis.includes(emoji)) {
			emojis.push(emoji);
		}
	}

	function removeEmoji(emoji) {
		emojis = emojis.filter(e => e !== emoji);
	}

	function saveLevel() {
		if (validateInput(gridSize, timer, emojis)) {
			const level = {
				label: levelName,
				size: gridSize,
				duration: timer * 1000,
				emojis
			};
			saveCustomLevel(level);
			customLevels = listCustomLevels();
			resetForm();
		} else {
			showError('Invalid input. Please check your settings.');
		}
	}

	function editLevel(level) {
		selectedLevel = level;
		levelName = level.label;
		gridSize = level.size;
		timer = level.duration / 1000;
		emojis = level.emojis;
	}

	function deleteLevel(level) {
		deleteCustomLevel(level.label);
		customLevels = listCustomLevels();
	}

	function resetForm() {
		levelName = '';
		gridSize = 4;
		timer = 60;
		emojis = [];
		selectedLevel = null;
	}
</script>

<div class="editor">
	<h1>Level Editor</h1>
	<div class="form-group">
		<label for="levelName">Level Name:</label>
		<input type="text" id="levelName" bind:value={levelName} />
	</div>
	<div class="form-group">
		<label for="gridSize">Grid Size:</label>
		<input type="number" id="gridSize" bind:value={gridSize} min="2" max="10" />
	</div>
	<div class="form-group">
		<label for="timer">Timer (seconds):</label>
		<input type="number" id="timer" bind:value={timer} min="10" max="600" />
	</div>
	<div class="form-group">
		<label>Emojis:</label>
		<EmojiPicker on:emoji-click={addEmoji} />
		<div class="emoji-list">
			{#each emojis as emoji}
				<span class="emoji" on:click={() => removeEmoji(emoji)}>{emoji}</span>
			{/each}
		</div>
	</div>
	<div class="form-group">
		<button on:click={saveLevel}>Save Level</button>
		{#if selectedLevel}
			<button on:click={resetForm}>Cancel</button>
		{/if}
	</div>
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
</div>

<style>
	.editor {
		max-width: 600px;
		margin: 0 auto;
		padding: 1em;
		background: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.form-group {
		margin-bottom: 1em;
	}

	label {
		display: block;
		margin-bottom: 0.5em;
		font-weight: bold;
	}

	input[type="text"],
	input[type="number"] {
		width: 100%;
		padding: 0.5em;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.emoji-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		margin-top: 0.5em;
	}

	.emoji {
		font-size: 1.5em;
		cursor: pointer;
	}

	button {
		padding: 0.5em 1em;
		border: none;
		border-radius: 4px;
		background: #007bff;
		color: white;
		cursor: pointer;
	}

	button:hover {
		background: #0056b3;
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
