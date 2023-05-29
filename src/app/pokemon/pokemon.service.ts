import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	getPokemonList(): Pokemon[] {
		return POKEMONS
	}


}
