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
	newPokemon: Pokemon
	types: string[];

	constructor(
		private pokemonService: PokemonService,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.types = this.pokemonService.getPokemonTypesList();
		if (this.pokemon) {
			this.newPokemon = { ...this.pokemon, types: [...this.pokemon.types] };
		}
	}

	hasType(type: string): boolean {
		return this.newPokemon.types.includes(type) || false;
	}

	selectType($event: Event, type: string) {
		const isChecked: boolean = ($event.target as HTMLInputElement).checked

		if (isChecked) {
			this.newPokemon.types.push(type)
		} else {
			const index = this.newPokemon.types.indexOf(type)
			this.newPokemon.types.splice(index, 1)
		}

	}

	isTypesValid(type: string): boolean {

		if (this.newPokemon.types.length == 1 && this.hasType(type)) {
			return false;
		}

		if (this.newPokemon.types.length >= 3 && !this.hasType(type)) {
			return false
		}

		return true
	}

	onSubmit() {
		this.pokemonService.updatePokemonInfo(this.newPokemon)

		this.router.navigate([`details-pokemon/${this.pokemon.id}`])
	}

	returPokemonDetail() {
		this.router.navigate([`details-pokemon/${this.pokemon.id}`])
	}

}