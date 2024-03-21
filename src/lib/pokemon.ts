import pokemon from '$lib/assets/pokemon/pokemon.en.json';
import pokemonDe from '$lib/assets/pokemon/pokemon.de.json';

export default pokemon.map((name) => name.toLowerCase());

export const pokemonNames = {
	en: pokemon,
	de: pokemonDe
};

export const dexNrLookup = new Map();

pokemon.forEach((name, index) => {
	dexNrLookup.set(name.toLowerCase(), index + 1);
});

pokemonDe.forEach((name, index) => {
	dexNrLookup.set(name.toLowerCase(), index + 1);
});
