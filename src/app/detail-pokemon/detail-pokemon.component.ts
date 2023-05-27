import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

@Component({
	selector: 'app-detail-pokemon',
	templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

	pokemonList: Pokemon[]
	pokemon: Pokemon | undefined

	constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

	ngOnInit() {
		this.pokemonList = POKEMONS;
		const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

		if (id) {
			this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +id)
		}
	}

	returnButton(name?: string) {
		if (!name) {
			this.route.navigate([`/pokemons`]);
		} else {
			this.route.navigate([`/pokemons`], { fragment: name })
		}
	}
}
