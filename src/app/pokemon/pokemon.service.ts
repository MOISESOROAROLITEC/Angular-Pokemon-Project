import { Injectable, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonService {

	getPokemonList(): Pokemon[] {
		return POKEMONS
	}

	getPokemonById(pokemonId: number): Pokemon | undefined {
		return POKEMONS.find(pokemon => pokemon.id == pokemonId)
	}

	addNewPokemon(pokemon: Pokemon) {
		POKEMONS.push(pokemon);
	}

	updatePokemonInfo(pokemon: Pokemon) {
		const newPokemon: Pokemon | undefined = POKEMONS.find(pok => pok.id === pokemon.id);
		if (newPokemon) {
			newPokemon.name = pokemon.name;
			newPokemon.cp = pokemon.cp;
			newPokemon.hp = pokemon.hp;
			newPokemon.types = pokemon.types;
		}
	}

	getNewPokemonId(): number {
		let id: number = 0
		POKEMONS.map(pokemon => { id < pokemon.id && (id = pokemon.id) })
		id++
		return id
	}

	getPokemonTypesList(): string[] {
		return [
			"Plante",
			"Poison",
			"Feu",
			"Eau",
			"Insecte",
			"Normal",
			"Vol",
			"Electrik",
			"Fée",
			"Psy"
		]
	}

}
