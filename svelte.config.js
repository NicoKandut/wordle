import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: '/wordle'
		},
		appDir: 'app',
		version: {
			name: child_process.execSync('git rev-parse HEAD').toString().trim().substring(0, 7)
		}
	}
};

export default config;
