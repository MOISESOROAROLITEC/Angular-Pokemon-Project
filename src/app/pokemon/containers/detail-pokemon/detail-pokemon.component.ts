import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../pokemon.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
	selector: 'app-detail-pokemon',
	templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

	pokemon: Pokemon | undefined
	message = "Ce pokémon est introuvable"
	loadingPokemon: boolean = true

	constructor(
		private activatedRoute: ActivatedRoute,
		private route: Router,
		private pokemonService: PokemonService,
		private notifService: NotificationService
	) { }

	ngOnInit() {
		const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

		if (id) {
			this.pokemonService.getPokemonById(+id)
				.subscribe((pokemons) => {
					this.loadingPokemon = false
					this.pokemon = pokemons
				})
		}
	}

	gotToPokemonsList(name?: string) {
		if (!name) {
			this.route.navigate([`/pokemons`]);
		} else {
			this.route.navigate([`/pokemons`], { fragment: name })
		}
	}

	editPokemon(id: number) {
		this.route.navigate([`/pokemons/edit/${id}`]);
	}

	deletePokemon(id: number) {
		this.pokemonService.deletePokemon(id).subscribe(
			() => {
				this.notifService.showSuccess("Pokémon supprimé avec succèss");
				this.gotToPokemonsList()
			}
		);
	}

}
