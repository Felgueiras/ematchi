import { type Level } from './levels';
import { browser } from '$app/environment';

const CUSTOM_LEVELS_KEY = 'ematchi-custom-levels';

export function getCustomLevels(): Level[] {
	if (!browser) return [];

	try {
		const stored = localStorage.getItem(CUSTOM_LEVELS_KEY);
		return stored ? JSON.parse(stored) : [];
	} catch (error) {
		console.error('Error loading custom levels:', error);
		return [];
	}
}

export function saveCustomLevel(level: Level): void {
	if (!browser) return;

	try {
		const customLevels = getCustomLevels();
		const existingIndex = customLevels.findIndex((l) => l.label === level.label);

		if (existingIndex >= 0) {
			customLevels[existingIndex] = level;
		} else {
			customLevels.push(level);
		}

		localStorage.setItem(CUSTOM_LEVELS_KEY, JSON.stringify(customLevels));
	} catch (error) {
		console.error('Error saving custom level:', error);
	}
}

export function deleteCustomLevel(levelName: string): void {
	if (!browser) return;

	try {
		const customLevels = getCustomLevels();
		const filtered = customLevels.filter((l) => l.label !== levelName);
		localStorage.setItem(CUSTOM_LEVELS_KEY, JSON.stringify(filtered));
	} catch (error) {
		console.error('Error deleting custom level:', error);
	}
}
