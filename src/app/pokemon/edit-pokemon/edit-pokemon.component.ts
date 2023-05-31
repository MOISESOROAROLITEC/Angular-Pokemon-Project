import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

@Component({
	selector: 'app-edit-pokemon',
	templateUrl: './edit-pokemon.component.html',
	styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

	@Input() pokemon: Pokemon;
	types: string[];


	constructor(
		private pokemonService: PokemonService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {

		this.types = this.pokemonService.getPokemonTypesList();
		const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

		if (id) {
			this.pokemon = POKEMONS.find(pokemon => pokemon.id == +id) || POKEMONS[0]
		}
	}

	hasType(type: string): boolean {
		return this.pokemon.types.includes(type) || false;
	}

	selectType($event: Event, type: string) {
		const isChecked: boolean = ($event.target as HTMLInputElement).checked

		if (isChecked) {
			this.pokemon.types.push(type)
		} else {
			const index = this.pokemon.types.indexOf(type)
			this.pokemon.types.splice(index, 1)
		}

	}

	isTypesValid(type: string): boolean {

		if (this.pokemon.types.length == 1 && this.hasType(type)) {
			return false;
		}

		if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
			return false
		}

		return true
	}

	onSubmit() {
		console.log("Soumition du formulaire");
		this.router.navigate([`pokemon-details/${this.pokemon.id}`])
	}

}
