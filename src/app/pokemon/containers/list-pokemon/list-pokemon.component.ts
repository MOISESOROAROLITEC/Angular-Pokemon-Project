import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../models/pokemon.model";
import { Router } from "@angular/router";
import { PokemonService } from "../../pokemon.service";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  loadingPokemons: boolean = true;

  constructor(
    private route: Router,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((pokemons) => {
      this.loadingPokemons = false;
      this.pokemonList = pokemons;
    });
  }

  showPokemonDetail(id: number) {
    this.route.navigate([`/pokemons/details/${id}`]);
  }

  createNewPokemon() {
    this.route.navigate(["/pokemons/create"]);
  }
}
