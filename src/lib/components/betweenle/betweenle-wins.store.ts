import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initial = (): Set<string> => {
	return browser ? new Set(JSON.parse(localStorage.getItem('betweenle:wins') ?? '[]')) : new Set();
};

const createStore = () => {
	const { subscribe, set, update } = writable<Set<string>>(initial());

	return {
		subscribe,
		reset: () => set(initial()),
		addWin(word: string) {
			update((state) => {
				state.add(word);
				browser && localStorage.setItem('betweenle:wins', JSON.stringify(Array.from(state)));
				return state;
			});
		}
	};
};

export default createStore();
