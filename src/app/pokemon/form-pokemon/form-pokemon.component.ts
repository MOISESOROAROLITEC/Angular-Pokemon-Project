import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-form-pokemon',
	templateUrl: './form-pokemon.component.html',
	styleUrls: ['./form-pokemon.component.scss'],
})
export class FormPokemonComponent {

	@Input() pokemon: Pokemon;
	@Input() files: string[];
	newPokemon: Pokemon
	types: string[];
	isEdit: boolean;

	constructor(
		private pokemonService: PokemonService,
		private router: Router,
		private messageService: MessageService
	) { }

	ngOnInit(): void {
		this.types = this.pokemonService.getPokemonTypesList();
		this.isEdit = !Boolean(this.pokemon.id)
		if (this.isEdit) {
			this.newPokemon = { ...this.pokemon, types: [...this.pokemon.types] };
		} else {
			this.newPokemon = this.pokemon;
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

	returPokemonDetail() {
		if (!this.pokemon.id) {
			this.router.navigate([`pokemons`])
		} else {
			this.router.navigate([`pokemons/details/${this.pokemon.id}`])
		}
	}

	showNotification(severity: string = 'success', summary: string = 'Success', detail: string = 'Default Message') {
		this.messageService.add({ severity, summary, detail })
	}

	onSubmit() {
		if (!this.pokemon.id) {

			this.pokemonService.addNewPokemon(this.newPokemon).subscribe(
				(pokemon: Pokemon) => {
					this.showNotification("success", "Créée", "Pokémon créée avec succes")
					this.router.navigate([`pokemons/details`, pokemon.id])
				},
				() => this.showNotification("warning", "Erreur", "Erreur lors de la création du Pokémon")

			);

		} else {
			this.pokemonService.updatePokemonInfo(this.newPokemon)
				.subscribe(() => {
					this.router.navigate([`pokemons/details`, this.pokemon.id]);
					this.showNotification("success", "Mise à jour", "Le Pokémon a été mise à jour avec succes");
				})
		}
	}
}