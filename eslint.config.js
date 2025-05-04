import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

export default defineConfig({
	files: ['**/*.js', '**/*.ts'],
	ignores: ['node_modules/', 'build/', 'dist/', 'static/', '.svelte-kit/**', '*.css'],
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module'
		}
	},
	plugins: {
		'@typescript-eslint': tseslint
	},
	rules: {
		...tseslint.configs.recommended.rules
	}
});
