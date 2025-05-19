<script lang="ts">
	import { onMount } from 'svelte';
	import type { Level } from '../levels';
	import { goto } from '$app/navigation';
	import EmojiPicker from './EmojiPicker.svelte';

	// Default values for the form
	let label = 'Custom Level';
	let size = 4;
	let duration = 60;
	let selectedEmojis: string[] = [];

	// Create custom level and store it in localStorage
	function createLevel() {
		const neededEmojis = Math.ceil((size * size) / 2);
		
		if (selectedEmojis.length < neededEmojis) {
			alert(`You need at least ${neededEmojis} emojis for a ${size}x${size} grid!`);
			return;
		}

		// Create the level object
		const customLevel: Level = {
			label,
			size,
			duration: duration * 1000, // Convert to milliseconds
			emojis: selectedEmojis
		};

		// Store the custom level in localStorage
		const savedLevels = JSON.parse(localStorage.getItem('customLevels') || '[]');
		savedLevels.push(customLevel);
		localStorage.setItem('customLevels', JSON.stringify(savedLevels));

		// Go back to main page
		goto('/');
	}
	
	// Update required emoji count when size changes
	$: requiredEmojiCount = Math.ceil((size * size) / 2);
</script>

<div class="editor-container">
	<header>
		<h1>Custom Level Editor</h1>
		<a href="/" class="back-button">← Back to Game</a>
	</header>

	<form on:submit|preventDefault={createLevel}>
		<div class="form-group">
			<label for="label">Level Name:</label>
			<input id="label" type="text" bind:value={label} required />
		</div>

		<div class="form-group">
			<label for="size">Grid Size:</label>
			<select id="size" bind:value={size}>
				<option value={3}>3x3 (Easy)</option>
				<option value={4}>4x4 (Medium)</option>
				<option value={6}>6x6 (Hard)</option>
				<option value={8}>8x8 (Very Hard)</option>
				<option value={10}>10x10 (Expert)</option>
			</select>
		</div>

		<div class="form-group">
			<label for="duration">Duration (seconds):</label>
			<input id="duration" type="number" bind:value={duration} min="10" max="600" required />
		</div>

		<div class="form-group">
      <label id="emoji-picker-label">Emojis:</label>
      <div aria-labelledby="emoji-picker-label">
        <EmojiPicker bind:selectedEmojis={selectedEmojis} requiredCount={requiredEmojiCount} />
      </div>
    </div>

		<div class="form-actions">
			<button type="submit" class="create-button">Create Level</button>
		</div>
	</form>
</div>

<style>
	.editor-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		color: #333;
	}

	.back-button {
		text-decoration: none;
		padding: 0.5rem 1rem;
		background-color: #f0f0f0;
		border-radius: 4px;
		color: #333;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	input,
	select {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
	}  /* Emoji picker styling is now in the EmojiPicker component */

  .form-actions {
    margin-top: 2rem;
    text-align: center;
  }

  .create-button {
    padding: 0.75rem 2rem;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 2em;
    font-size: 1.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .create-button:hover {
    background-color: #6a1b9a;
  }
</style>
