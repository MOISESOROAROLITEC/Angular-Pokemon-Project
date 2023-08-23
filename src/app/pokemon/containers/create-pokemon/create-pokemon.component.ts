import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../models/pokemon.model";
import { PokemonService } from "../../pokemon.service";
import { NotificationService } from "src/app/notification.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-pokemon",
  templateUrl: "./create-pokemon.component.html",
  styleUrls: ["./create-pokemon.component.scss"],
})
export class CreatePokemonComponent implements OnInit {
  pokemon: Pokemon;
  types: string[];
  previewImage: string | undefined;

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypesList();
    this.pokemon = new Pokemon();
  }

  CreatePokemon(pokemon: Pokemon) {
    this.pokemonService.addNewPokemon(pokemon).subscribe(
      (pokemon: Pokemon) => {
        this.notificationService.showSuccess("Pokémon créée avec succes");
        this.router.navigate([`pokemons/details`, pokemon.id]);
      },
      () =>
        this.notificationService.showError(
          "Erreur lors de la création du Pokémon",
        ),
    );
  }
}
