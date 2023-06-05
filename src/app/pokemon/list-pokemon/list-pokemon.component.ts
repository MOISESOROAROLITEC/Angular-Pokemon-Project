import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-list-pokemon',
	templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
	pokemonList: Pokemon[];

	constructor(
		private route: Router,
		private pokemonService: PokemonService
	) { }

	ngOnInit() {
		this.pokemonService.getPokemonList()
			.subscribe(pokemons => {
				this.pokemonList = pokemons
			})
	}

	showPokemonDetail(id: number) {
		this.route.navigate([`/pokemons/details/${id}`])
	}

	createNewPokemon() {
		this.route.navigate(['/pokemons/create'])
	}

}
