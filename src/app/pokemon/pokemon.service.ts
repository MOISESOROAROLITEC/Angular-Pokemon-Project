import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonService {
	typesList: string[];

	constructor() { }

	getPokemonList(): Pokemon[] {
		return POKEMONS
	}

	getPokemonById(pokemonId: number): Pokemon | undefined {
		return POKEMONS.find(pokemon => pokemon.id == pokemonId)
	}

	getPokemonTypesList(): string[] {

		POKEMONS.map(pokemon => {

			pokemon.types.map(type => {

				if (!this.typesList.includes(type)) {
					this.typesList = [...this.typesList, type]
				};

			});

		});
		return this.typesList;
	}

}
