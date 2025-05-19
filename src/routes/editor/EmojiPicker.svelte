<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    
	// Props
	export let selectedEmojis: string[] = [];
	export let requiredCount: number = 8;
    
	// Event dispatcher
	const dispatch = createEventDispatcher();
    
	// Emoji categories
	let emojiCategories: Record<string, string[]> = {
		'Faces': '😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡'.split(' '),
		'Food & Drink': '🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥬 🥒 🌶 🫑 🌽 🥕 🫒 🧄 🧅 🥔 🍠 🫘 🥐 🥯 🍞 🥖 🥨 🧀 🥚 🍳 🧈 🥞 🧇 🥓 🥩 🍗 🍖 🦴 🌭 🍔 🍟 🍕'.split(' '),
		'Animals': '🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐻‍❄️ 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🪱 🐛 🦋 🐌 🐞 🐜 🪰 🪲 🪳 🦟 🦗 🕷 🕸 🦂 🐢 🐍'.split(' '),
		'Sports': '⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🪃 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛼 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️‍♀️ 🏋️ 🏋️‍♂️ 🤼‍♀️ 🤼 🤼‍♂️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️‍♀️ ⛹️ ⛹️‍♂️ 🤺'.split(' '),
		'Objects': '⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 🧭 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🪔 🧯 🛢 💸 💵 💴 💶 💷 🪙 💰 💳 💎 ⚖️'.split(' ')
	};
    
	// Current category selection
	let selectedCategory = 'Food & Drink';
	let availableEmojis: string[] = [];
	let customEmojis = '';
    
	// Init available emojis
	$: availableEmojis = emojiCategories[selectedCategory];
    
	// Toggle selection of an emoji
	function toggleEmoji(emoji: string) {
		const index = selectedEmojis.indexOf(emoji);
		if (index === -1) {
			selectedEmojis = [...selectedEmojis, emoji];
		} else {
			selectedEmojis = selectedEmojis.filter(e => e !== emoji);
		}
		dispatch('change', selectedEmojis);
	}
    
	// Add custom emojis
	function addCustomEmojis() {
		if (customEmojis) {
			const newEmojis = customEmojis.trim().split(/\s+/);
			selectedEmojis = [...selectedEmojis, ...newEmojis];
			dispatch('change', selectedEmojis);
			customEmojis = '';
		}
	}
</script>

<div class="emoji-picker">
	<div class="emoji-categories">
		<label for="emoji-category">Category:</label>
		<select id="emoji-category" bind:value={selectedCategory}>
			{#each Object.keys(emojiCategories) as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>
    
	<div class="available-emojis">
		<h3>Available Emojis</h3>
		<div class="emoji-grid">
			{#each availableEmojis as emoji}
				<button 
					type="button" 
					class="emoji-button" 
					class:selected={selectedEmojis.includes(emoji)} 
					on:click={() => toggleEmoji(emoji)}
				>
					{emoji}
				</button>
			{/each}
		</div>
	</div>
    
	<div class="custom-emoji-input">
		<label for="custom-emojis">Add Custom Emojis:</label>
		<div class="input-group">
			<input 
				id="custom-emojis"
				type="text" 
				bind:value={customEmojis} 
				placeholder="Enter emojis separated by spaces"
			/>
			<button type="button" on:click={addCustomEmojis}>Add</button>
		</div>
	</div>
    
	<div class="selected-emojis">
		<h3>Selected Emojis ({selectedEmojis.length} / {requiredCount} needed)</h3>
		{#if selectedEmojis.length > 0}
			<div class="emoji-grid">
				{#each selectedEmojis as emoji}
					<button 
						type="button" 
						class="emoji-button selected" 
						on:click={() => toggleEmoji(emoji)}
					>
						{emoji}
					</button>
				{/each}
			</div>
		{:else}
			<p class="empty-message">No emojis selected yet</p>
		{/if}
	</div>
</div>

<style>
	.emoji-picker {
		width: 100%;
		max-width: 900px;
		margin: 0 auto;
	}
    
	.emoji-categories {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
    
	select {
		padding: 0.5rem;
		border-radius: 4px;
		border: 1px solid #ddd;
		font-size: 1rem;
	}
    
	.emoji-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
		gap: 0.5rem;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
    
	.emoji-button {
		font-size: 1.5rem;
		padding: 0.5rem;
		border: 1px solid #ddd;
		background-color: #f9f9f9;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s ease;
	}
    
	.emoji-button:hover {
		background-color: #f0f0f0;
		transform: scale(1.05);
	}
    
	.emoji-button.selected {
		background-color: #e6f7ff;
		border-color: #1890ff;
	}
    
	.custom-emoji-input {
		margin: 1rem 0;
	}
    
	.input-group {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}
    
	.input-group input {
		flex: 1;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
	}
    
	.input-group button {
		padding: 0.5rem 1rem;
		background-color: #1890ff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}
    
	.input-group button:hover {
		background-color: #096dd9;
	}
    
	h3 {
		margin-bottom: 0.5rem;
		color: #333;
	}
    
	.empty-message {
		color: #999;
		text-align: center;
		padding: 1rem;
		border: 1px dashed #ddd;
		border-radius: 4px;
	}
    
	label {
		font-weight: bold;
	}
</style>
