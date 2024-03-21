import pokemon, { dexNrLookup } from '$lib/pokemon';
import { writable } from 'svelte/store';
import winsStore from './pokedexle-wins.store';

interface Store {
	targetDexNr: number;
	lowerDexNr: number;
	upperDexNr: number;

	upperPokemon: string;
	lowerPokemon: string;
	attempt: string;

	currentGuess: number;
	maxGuesses: number;

	distanceUpper: number;
	distanceLower: number;

	win: boolean;
	lose: boolean;
	incorrect: boolean;
	correct: string;
	visible: boolean;
	ended: boolean;
}

const initial = (): Store => {
	const targetDexNr = Math.floor(Math.random() * pokemon.length) + 1;
	return {
		// indices
		targetDexNr,
		upperDexNr: 0,
		lowerDexNr: pokemon.length + 1,

		// words
		upperPokemon: '???',
		lowerPokemon: '???',
		attempt: '',

		// guesses
		currentGuess: 1,
		maxGuesses: 15,

		// distance
		distanceUpper: targetDexNr,
		distanceLower: pokemon.length + 1 - targetDexNr,

		// game state
		win: false,
		lose: false,
		incorrect: false,
		correct: '',
		visible: false,
		ended: false
	};
};

const createStore = () => {
	const { subscribe, set, update } = writable<Store>(initial());

	return {
		subscribe,
		reset: () => set(initial()),
		submit(guess: string) {
			update((state) => {
				if (state.win || state.lose) {
					return initial();
				}

				guess = guess.toLowerCase();

				const guessDexNr = dexNrLookup.get(guess);

				if (dexNrLookup === undefined) {
					state.incorrect = true;
					setTimeout(() => {
						update((state) => {
							state.incorrect = false;
							return state;
						});
					}, 300);
					return state;
				}

				if (guessDexNr === state.targetDexNr) {
					state.win = true;
					state.ended = true;
					winsStore.addWin(pokemon[state.targetDexNr - 1]);
					return state;
				}

				if (guessDexNr <= state.upperDexNr || guessDexNr >= state.lowerDexNr) {
					state.incorrect = true;
					setTimeout(() => {
						update((state) => {
							state.incorrect = false;
							return state;
						});
					}, 300);
					return state;
				}

				if (state.currentGuess >= state.maxGuesses) {
					state.lose = true;
					state.ended = true;
					return state;
				}

				state.visible = true;
				state.currentGuess = state.currentGuess + 1;

				if (guessDexNr < state.targetDexNr) {
					state.upperPokemon = guess;
					state.upperDexNr = guessDexNr;
					state.distanceUpper = state.targetDexNr - state.upperDexNr;
					state.correct = 'up';
					setTimeout(() => {
						update((state) => {
							state.correct = '';
							state.attempt = '';
							return state;
						});
					}, 300);
					return state;
				}

				if (guessDexNr > state.targetDexNr) {
					state.lowerPokemon = guess;
					state.lowerDexNr = guessDexNr;
					state.distanceLower = state.lowerDexNr - state.targetDexNr;
					state.correct = 'down';
					setTimeout(() => {
						update((state) => {
							state.correct = '';
							state.attempt = '';
							return state;
						});
					}, 300);
				}

				return state;
			});
		}
	};
};

export default createStore();
