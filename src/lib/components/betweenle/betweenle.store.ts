import { typeableWords, possibleWords } from '$lib/words';
import { writable } from 'svelte/store';
import winsStore from './betweenle-wins.store';

interface Store {
	targetIndex: number;
	lowerIndex: number;
	upperIndex: number;
	targetWord: string;
	upperWord: string;
	lowerWord: string;
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
	const targetWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	const targetIndex = typeableWords.indexOf(targetWord);
	return {
		// indices
		targetIndex,
		lowerIndex: 0,
		upperIndex: typeableWords.length,

		// words
		targetWord,
		upperWord: 'aaaaa',
		lowerWord: 'zzzzz',
		attempt: '',

		// guesses
		currentGuess: 1,
		maxGuesses: 15,

		// distance
		distanceUpper: targetIndex,
		distanceLower: typeableWords.length - targetIndex,

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
		submit() {
			update((state) => {
				if (state.win || state.lose) {
					return initial();
				}

				if (state.attempt.length === 5) {
					if (state.attempt === state.targetWord) {
						state.win = true;
						state.ended = true;
						winsStore.addWin(state.targetWord);
						return state;
					}

					const upperComparison = state.attempt.localeCompare(state.upperWord);
					const lowerComparison = state.attempt.localeCompare(state.lowerWord);

					if (
						upperComparison <= 0 ||
						lowerComparison >= 0 ||
						!typeableWords.includes(state.attempt)
					) {
						state.incorrect = true;
						setTimeout(() => {
							update((state) => {
								state.incorrect = false;
								return state;
							});
						}, 300);
						return state;
					}

					const targetComparison = state.attempt.localeCompare(state.targetWord);
					if (targetComparison !== 0) {
						if (state.currentGuess >= state.maxGuesses) {
							state.lose = true;
							state.ended = true;
							return state;
						}

						state.visible = true;
						state.currentGuess = state.currentGuess + 1;

						if (targetComparison > 0) {
							state.lowerWord = state.attempt;
							state.lowerIndex = typeableWords.indexOf(state.attempt);
							state.distanceLower = state.lowerIndex - state.targetIndex;
							state.correct = 'down';
							setTimeout(() => {
								update((state) => {
									state.correct = '';
									state.attempt = '';
									return state;
								});
							}, 300);
						}

						if (targetComparison < 0) {
							state.upperWord = state.attempt;
							state.upperIndex = typeableWords.indexOf(state.attempt);
							state.distanceUpper = state.targetIndex - state.upperIndex;
							state.correct = 'up';
							setTimeout(() => {
								update((state) => {
									state.correct = '';
									state.attempt = '';
									return state;
								});
							}, 300);
						}

						return state;
					}
				}

				return state;
			});
		},
		addLetter(letter: string) {
			update((state) => {
				if (state.attempt.length < 5 && letter.length === 1 && letter.match(/[a-zA-Z]/)) {
					state.attempt += letter.toLowerCase();
				}
				return state;
			});
		},
		removeLetter() {
			update((state) => {
				state.attempt = state.attempt.slice(0, -1);
				return state;
			});
		}
	};
};

export default createStore();
