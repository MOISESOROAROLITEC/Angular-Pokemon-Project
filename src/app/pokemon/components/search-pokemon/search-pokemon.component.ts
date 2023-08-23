import { Component, OnInit } from "@angular/core";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs";
import { Pokemon } from "../../models";
import { Router } from "@angular/router";
import { PokemonService } from "../../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
  styleUrls: ["./search-pokemon.component.scss"],
})
export class SearchPokemonComponent implements OnInit {
  searchTerm = new Subject<string>();
  pokemonList$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.pokemonList$ = this.searchTerm.pipe(
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term)),
    );
  }

  searchPokemon(term: string) {
    this.searchTerm.next(term);
  }

  goToPokemonDetail(id: number) {
    this.router.navigate(["pokemons/details", id]);
  }
}
