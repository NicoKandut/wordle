<script lang="ts">
	import { pokemonNames } from '$lib/pokemon';

	export let lang: 'en' | 'de';

	let sortedNames: string[] = [];

	$: {
		if (lang) {
			sortedNames = [...pokemonNames[lang]].sort();
		}
	}
</script>

<datalist id="pokemon">
	{#each sortedNames as name}
		<option value={name}> </option>
	{/each}
</datalist>
