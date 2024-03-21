<script lang="ts">
	import PokemonDataList from './PokemonDataList.svelte';
	import Meter from '$lib/components/pokedexle/Meter.svelte';
	import Boundary from '$lib/components/pokedexle/Boundary.svelte';
	import store from '$lib/components/pokedexle/pokedexle.store';
	import Wins from '$lib/components/pokedexle/Wins.svelte';

	let guess: string;
	let lang: 'en' | 'de' = 'en';

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			store.submit(guess);
		}
	};
</script>

<section>
	<div class="header">
		<h1>Pokedexle</h1>
		<button on:click={() => (lang = lang === 'en' ? 'de' : 'en')}>{lang}</button>
	</div>
	<div class:win={$store.win} class:lose={$store.lose} class="board">
		<Meter />
		<div class="names">
			<Boundary name={$store.upperPokemon} />
			<input type="text" list="pokemon" bind:value={guess} on:keydown={handleKeyDown} />
			<Boundary name={$store.lowerPokemon} />
		</div>
	</div>

	<Wins />

	<PokemonDataList {lang} />
</section>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.board {
		display: grid;
		grid-template-columns: 4rem 22rem;
		gap: 1rem;
	}

	.names {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	input {
		font-size: 32px;
		border: 2px solid black;
		height: 4rem;
		padding-inline: 20px;
		text-transform: uppercase;
		width: 22rem;
		box-sizing: border-box;
	}

	.win input {
		color: white;
		background-color: green;
		border: none;
	}

	.lose input {
		color: white;
		background-color: red;
		border: none;
	}

	button {
		font-size: 18px;
		border: none;
		width: 3rem;
		height: 3rem;
		text-transform: uppercase;
		background-color: unset;
	}

	button:hover {
		background-color: darkorange;
		color: white;
		cursor: pointer;
	}
</style>
