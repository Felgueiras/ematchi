export function shuffle<T>(array: T[]) {
	let i = array.length;

	while (i--) {
		const j = Math.floor(Math.random() * i + 1);
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

export function get_twemoji_url(emoji: string) {
	const code = [...emoji].map((char) => char.codePointAt(0)?.toString(16)).join('-');
	return `/twemoji/${code}.svg`;
}

export function validateInput(gridSize: number, timer: number, emojis: string[]): boolean {
	if (gridSize < 2 || gridSize > 10) {
		return false;
	}
	if (timer < 10 || timer > 600) {
		return false;
	}
	if (emojis.length !== gridSize * gridSize / 2) {
		return false;
	}
	const uniqueEmojis = new Set(emojis);
	if (uniqueEmojis.size !== emojis.length) {
		return false;
	}
	return true;
}

export function showError(message: string) {
	alert(message);
}
