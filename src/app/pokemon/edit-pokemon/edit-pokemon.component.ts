import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { POKEMONS } from '../mock-pokemons';

@Component({
	selector: 'app-edit-pokemon',
	templateUrl: './edit-pokemon.component.html',
	styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

	pokemon: Pokemon | undefined;

	constructor(
		private activatedRoute: ActivatedRoute,
	) { }

	ngOnInit(): void {
		const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

		if (id) {
			this.pokemon = POKEMONS.find(pokemon => pokemon.id == +id)
		}
	}

}
