import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
	selector: 'app-list-pokemon',
	templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
	pokemonList: Pokemon[] = POKEMONS;

	constructor(private route: Router) { }

	ngOnInit() { }

	showPokemonDetail(id: number) {
		this.route.navigate([`/pokemon-details/${id}`])
	}
}
