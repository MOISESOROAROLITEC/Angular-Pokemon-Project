import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-detail-pokemon',
	templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

	pokemon: Pokemon | undefined

	constructor(
		private activatedRoute: ActivatedRoute,
		private route: Router,
		private pokemonService: PokemonService
	) { }

	ngOnInit() {
		const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

		if (id) {
			this.pokemonService.getPokemonById(+id)
				.subscribe((pokemons) => { this.pokemon = pokemons })
		}
	}

	gotToPokemonListPage(name?: string) {
		if (!name) {
			this.route.navigate([`/pokemons`]);
		} else {
			this.route.navigate([`/pokemons`], { fragment: name })
		}
	}

	editPokemon(id: number) {
		this.route.navigate([`/edit-pokemon/${id}`]);
	}
}
