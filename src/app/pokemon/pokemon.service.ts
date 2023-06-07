import { Injectable, OnInit } from '@angular/core';

import { Pokemon } from './models/pokemon.model';
import { POKEMONS } from './mock-pokemons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

	constructor(
		private http: HttpClient,
	) { }

	getPokemonList(): Observable<Pokemon[]> {
		return this.http.get<Pokemon[]>('api/pokemons').pipe(
			catchError((error: any, caught) => this.handleError(error, caught))
		);
	}

	getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
		return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
			catchError((error: Error, caught: any) => this.handleError(error, caught))
		);
	}

	addNewPokemon(pokemon: Pokemon): Observable<Pokemon> {
		const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

		return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
			catchError((error: Error) => this.handleError(error))
		);
	}

	updatePokemonInfo(pokemon: Pokemon): Observable<null> {
		const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

		return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
			catchError((error: Error) => this.handleError(error))
		);
	}

	deletePokemon(id: number): Observable<null> {
		const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }

		return this.http.delete(`api/pokemons/${id}`, httpOptions).pipe(
			catchError((error: Error) => this.handleError(error))
		)
	}

	searchPokemonList(term: string): Observable<Pokemon[]> {
		if (term.length <= 1) {
			return of([])
		}
		return this.http.get<Pokemon[]>(`api/pokemons?name=${term}`).pipe(
			catchError(error => this.handleError(error))
		)
	}

	private handleError(error: Error, errorValue: any = undefined) {
		return of(errorValue);
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
