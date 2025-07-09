<script lang="ts">
	import { goto } from '$app/navigation';
	import Modal from '../Modal.svelte';
	import '../../styles.css';
	import { type Level } from '../levels';
	import { getCustomLevels, saveCustomLevel, deleteCustomLevel } from '../customLevels';

	let customLevels: Level[] = [];
	let editingLevel: Level | null = null;
	let showEditor = false;

	// Form state
	let levelName = '';
	let gridSize = 4;
	let duration = 60;
	let emojiInput = '';
	let errors: string[] = [];

	// Load custom levels on component mount
	$: customLevels = getCustomLevels();

	function startNewLevel() {
		editingLevel = null;
		levelName = '';
		gridSize = 4;
		duration = 60;
		emojiInput = '';
		errors = [];
		showEditor = true;
	}

	function editLevel(level: Level) {
		editingLevel = level;
		levelName = level.label;
		gridSize = level.size;
		duration = level.duration / 1000; // Convert from ms to seconds
		emojiInput = level.emojis.join(' ');
		errors = [];
		showEditor = true;
	}

	function validateLevel(): boolean {
		errors = [];

		if (!levelName.trim()) {
			errors.push('Level name is required');
		}

		if (gridSize < 3 || gridSize > 10) {
			errors.push('Grid size must be between 3 and 10');
		}

		if (duration < 10 || duration > 600) {
			errors.push('Duration must be between 10 and 600 seconds');
		}

		const emojis = emojiInput.trim().split(/\s+/).filter(Boolean);
		const uniqueEmojis = [...new Set(emojis)];
		const requiredEmojis = (gridSize * gridSize) / 2;

		if (emojis.length === 0) {
			errors.push('At least one emoji is required');
		} else if (uniqueEmojis.length !== emojis.length) {
			errors.push('Duplicate emojis are not allowed');
		} else if (uniqueEmojis.length < requiredEmojis) {
			errors.push(
				`Need at least ${requiredEmojis} unique emojis for a ${gridSize}x${gridSize} grid`
			);
		}

		return errors.length === 0;
	}

	function saveLevel() {
		if (!validateLevel()) return;

		const emojis = emojiInput.trim().split(/\s+/).filter(Boolean);
		const level: Level = {
			label: levelName.trim(),
			size: gridSize,
			duration: duration * 1000, // Convert to ms
			emojis
		};

		if (editingLevel) {
			// Update existing level
			deleteCustomLevel(editingLevel.label);
		}

		saveCustomLevel(level);
		customLevels = getCustomLevels();
		showEditor = false;
	}

	function cancelEdit() {
		showEditor = false;
		editingLevel = null;
	}

	function deleteLevelConfirm(level: Level) {
		if (confirm(`Are you sure you want to delete "${level.label}"?`)) {
			deleteCustomLevel(level.label);
			customLevels = getCustomLevels();
		}
	}

	function playLevel(level: Level) {
		// Navigate to main page and somehow trigger playing this level
		// For now, we'll need to store the level to play and navigate back
		localStorage.setItem('levelToPlay', JSON.stringify(level));
		goto('/');
	}

	function goBack() {
		goto('/');
	}
</script>

<Modal>
	<header>
		<h1>Level <span>Editor</span></h1>
		<p>create custom emoji matching challenges</p>
	</header>

	{#if !showEditor}
		<!-- Level list view -->
		<div class="level-list">
			<button on:click={startNewLevel} class="primary">Create New Level</button>

			{#if customLevels.length === 0}
				<p class="empty-state">No custom levels yet. Create your first level!</p>
			{:else}
				<div class="levels">
					{#each customLevels as level}
						<div class="level-item">
							<div class="level-info">
								<h3>{level.label}</h3>
								<p>
									{level.size}×{level.size} grid • {level.duration / 1000}s • {level.emojis.length} emojis
								</p>
							</div>
							<div class="level-actions">
								<button on:click={() => playLevel(level)}>Play</button>
								<button on:click={() => editLevel(level)}>Edit</button>
								<button on:click={() => deleteLevelConfirm(level)} class="danger">Delete</button>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="buttons">
			<button on:click={goBack}>Back to Game</button>
		</div>
	{:else}
		<!-- Level editor form -->
		<div class="editor-form">
			<div class="form-group">
				<label for="levelName">Level Name:</label>
				<input id="levelName" type="text" bind:value={levelName} placeholder="Enter level name" />
			</div>

			<div class="form-group">
				<label for="gridSize">Grid Size:</label>
				<select id="gridSize" bind:value={gridSize}>
					{#each [3, 4, 5, 6, 7, 8, 9, 10] as size}
						<option value={size}>{size}×{size} ({(size * size) / 2} pairs needed)</option>
					{/each}
				</select>
				<small>You'll need {(gridSize * gridSize) / 2} unique emojis for {gridSize * gridSize} grid squares</small>
			</div>

			<div class="form-group">
				<label for="duration">Duration (seconds):</label>
				<input id="duration" type="number" bind:value={duration} min="10" max="600" />
			</div>

			<div class="form-group">
				<label for="emojis">Emojis (space-separated):</label>
				<textarea id="emojis" bind:value={emojiInput} placeholder="🍎 🍊 🍌 🍇 🍓 🥝 🍒 🥭" rows="4"
				></textarea>
				<small>Enter emojis separated by spaces. No duplicates allowed.</small>
			</div>

			{#if errors.length > 0}
				<div class="errors">
					{#each errors as error}
						<div class="error">{error}</div>
					{/each}
				</div>
			{/if}

			<div class="buttons">
				<button on:click={saveLevel} class="primary">
					{editingLevel ? 'Update Level' : 'Save Level'}
				</button>
				<button on:click={cancelEdit}>Cancel</button>
			</div>
		</div>
	{/if}
</Modal>

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

	.level-list {
		width: 100%;
		max-width: 600px;
	}

	.primary {
		background: #6b46c1 !important;
		color: white !important;
	}

	.danger {
		background: #dc2626 !important;
		color: white !important;
	}

	.empty-state {
		text-align: center;
		color: #666;
		margin: 2em 0;
	}

	.levels {
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.level-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #f8f9fa;
		padding: 1em;
		border-radius: 1em;
		border: 1px solid #e9ecef;
	}

	.level-info h3 {
		margin: 0 0 0.25em 0;
		font-size: 1.2em;
	}

	.level-info p {
		margin: 0;
		color: #666;
		font-size: 0.9em;
	}

	.level-actions {
		display: flex;
		gap: 0.5em;
	}

	.level-actions button {
		padding: 0.5em 1em;
		font-size: 0.9em;
		border-radius: 0.5em;
	}

	.editor-form {
		width: 100%;
		max-width: 500px;
	}

	.form-group {
		margin-bottom: 1.5em;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5em;
		font-weight: bold;
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 0.75em;
		border: 1px solid #ddd;
		border-radius: 0.5em;
		font-size: 1em;
		box-sizing: border-box;
	}

	.form-group small {
		display: block;
		margin-top: 0.25em;
		color: #666;
		font-size: 0.85em;
	}

	.errors {
		margin-bottom: 1em;
	}

	.error {
		background: #fef2f2;
		border: 1px solid #fecaca;
		color: #dc2626;
		padding: 0.75em;
		border-radius: 0.5em;
		margin-bottom: 0.5em;
	}
</style>
