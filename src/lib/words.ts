import typeable from '$lib/assets/words/words.en.typeable.json';
import possible from '$lib/assets/words/words.en.possible.json';

export const possibleWords = Array.from(new Set(possible.sort()));
export const typeableWords = Array.from(new Set([...typeable, ...possible].sort()));
