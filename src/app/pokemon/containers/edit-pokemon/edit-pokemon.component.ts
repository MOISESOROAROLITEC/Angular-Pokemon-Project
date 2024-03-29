import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { PokemonService } from "../../pokemon.service";
import { Pokemon } from "../../models/pokemon.model";
import { POKEMONS } from "../../mock-pokemons";
import { NotificationService } from "src/app/notification.service";

@Component({
  selector: "app-edit-pokemon",
  templateUrl: "./edit-pokemon.component.html",
  styleUrls: ["./edit-pokemon.component.scss"],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  loading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      this.pokemonService.getPokemonById(+id).subscribe((pokemon) => {
        this.loading = false;
        if (pokemon?.id) {
          this.pokemon = pokemon;
        }
      });
    }
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemonService.updatePokemonInfo(pokemon).subscribe(() => {
      this.router.navigate([`pokemons/details`, pokemon.id]);
      this.notificationService.showSuccess(
        "Le Pokémon a été mise à jour avec succes",
      );
    });
  }
}
