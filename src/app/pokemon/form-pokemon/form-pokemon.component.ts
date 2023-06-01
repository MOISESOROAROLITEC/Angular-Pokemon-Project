import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-form-pokemon',
	templateUrl: './form-pokemon.component.html',
	styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent {

	@Input() pokemon: Pokemon;
	types: string[];

	constructor(
		private pokemonService: PokemonService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.types = this.pokemonService.getPokemonTypesList();
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