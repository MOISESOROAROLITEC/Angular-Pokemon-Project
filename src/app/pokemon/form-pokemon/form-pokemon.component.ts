import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// import fetch from 'node-fetch';
// import * as fs from 'fs';

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
	newPokemon: Pokemon
	types: string[];

	constructor(
		private pokemonService: PokemonService,
		private router: Router,
		private messageService: MessageService
	) { }

	ngOnInit(): void {
		this.types = this.pokemonService.getPokemonTypesList();
		const is = Boolean(this.pokemon.id)
		if (is) {
			this.newPokemon = { ...this.pokemon, types: [...this.pokemon.types] };
		} else {
			this.newPokemon = { id: 0, name: "", hp: 0, cp: 0, types: [], picture: "../assets/pokemon_images/pokemon-default.png", created: new Date }
		}
	}

	hasType(type: string): boolean {
		return this.newPokemon.types.includes(type) || false;
	}

	// async enregistrerImage(url: string, cheminDossier: string, nomImage: string) {
	// 	try {
	// 		const response = await fetch(url);
	// 		const buffer = await response.buffer();
	// 		const cheminComplet = `${cheminDossier}/${nomImage}`;
	// 		fs.writeFileSync(cheminComplet, buffer);
	// 		console.log('Image enregistrée avec succès !');
	// 	} catch (error) {
	// 		console.error('Une erreur s\'est produite :', error);
	// 	}
	// }

	// const urlImage = 'https://www.example.com/chemin/vers/image.jpg';
	// const cheminDossier = '/chemin/vers/dossier';
	// const nomImage = 'image.jpg';

	// enregistrerImage(urlImage, cheminDossier, nomImage);


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

			this.newPokemon.id = this.pokemonService.getNewPokemonId();
			console.log(this.newPokemon);
			this.pokemonService.addNewPokemon({ ...this.newPokemon });
			this.showNotification("success", "Créée", "Pokémon créée avec succes")
			this.router.navigate([`pokemons/details`, this.newPokemon.id])

		} else {
			this.pokemonService.updatePokemonInfo(this.newPokemon)
				.subscribe(() => {

					this.router.navigate([`pokemons/details`, this.pokemon.id]);
					this.showNotification("success", "Mise à jour", "Le Pokémon a été mise à jour avec succes")

				})
		}

	}

}