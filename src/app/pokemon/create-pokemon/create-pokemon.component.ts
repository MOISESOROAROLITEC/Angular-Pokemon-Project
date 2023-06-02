import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { FileUploadEvent } from 'primeng/fileupload';

@Component({
	selector: 'app-create-pokemon',
	templateUrl: './create-pokemon.component.html',
	styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {
	pokemon: Pokemon
	types: string[]
	files: null
	previewImage: string | undefined;

	constructor(
		private pokemonService: PokemonService
	) { }

	ngOnInit(): void {
		this.types = this.pokemonService.getPokemonTypesList();
		this.pokemon = { name: "", cp: 0, id: 0, hp: 0, picture: "", types: [], created: new Date }
	}

	handleFileUpload(event: any): void {
		const file = event.files[0];

		// Vérifier si le fichier est une image
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onload = (e: any) => {
				this.previewImage = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	}

}
