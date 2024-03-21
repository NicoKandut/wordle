import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initial = (key: string): Set<string> => {
	return browser ? new Set(JSON.parse(localStorage.getItem(key) ?? '[]')) : new Set();
};

export const createSetStore = (key: string) => {
	const { subscribe, set, update } = writable<Set<string>>(initial(key));

	return {
		subscribe,
		reset: () => set(initial(key)),
		addWin(word: string) {
			update((state) => {
				state.add(word);
				browser && localStorage.setItem('betweenle:wins', JSON.stringify(Array.from(state)));
				return state;
			});
		}
	};
};
