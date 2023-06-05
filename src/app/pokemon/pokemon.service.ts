import { Injectable, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

	constructor(
		private http: HttpClient,
	) { }

	getPokemonList(): Observable<Pokemon[]> {
		return this.http.get<Pokemon[]>('api/pokemons').pipe(
			tap(pokemon => this.log(pokemon)),
			catchError((error: any, caught) => this.handleError(error, caught))
		);
	}

	getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
		return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
			tap(pokemon => this.log(pokemon)),
			catchError((error: Error, caught: any) => this.handleError(error, caught))
		);
	}

	private log(pokemon: Pokemon | Pokemon[]) {
		console.table(pokemon);
	}

	private handleError(error: Error, errorValue: any) {
		console.log(error);
		return of(errorValue);
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
