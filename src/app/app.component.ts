import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
	pokemonList: Pokemon[] = POKEMONS;
	pokemonSelected: Pokemon | undefined;
	value: string
	value2: string
	value3: string

	ngOnInit(): void {
	}

	selectPokemon(pokemonId: string) {
		console.log(pokemonId);
		this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
		if (!this.pokemonSelected) {
			console.log("Le pokemon est introuvable");
		} else {
			console.log("Le pokemon selectionné est : ", this.pokemonSelected?.name);
		}
	}

}
