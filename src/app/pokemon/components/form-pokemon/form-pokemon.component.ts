import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

import { Pokemon } from "../../models/pokemon.model";
import { PokemonService } from "../../pokemon.service";

@Component({
  selector: "app-form-pokemon",
  templateUrl: "./form-pokemon.component.html",
  styleUrls: ["./form-pokemon.component.scss"],
})
export class FormPokemonComponent {
  @Input() pokemon: Pokemon;
  @Output() onCreatePokemon = new EventEmitter<Pokemon>();
  @Output() onUpdatePokemon = new EventEmitter<Pokemon>();

  newPokemon: Pokemon;
  types: string[];
  isEdit: boolean;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypesList();
    this.isEdit = Boolean(this.pokemon.id);
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
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.newPokemon.types.push(type);
    } else {
      const index = this.newPokemon.types.indexOf(type);
      this.newPokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.newPokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if (this.newPokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  returPokemonDetail() {
    if (!this.pokemon.id) {
      this.router.navigate([`pokemons`]);
    } else {
      this.router.navigate([`pokemons/details/${this.pokemon.id}`]);
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.onUpdatePokemon.emit(this.newPokemon);
    } else {
      this.onCreatePokemon.emit(this.newPokemon);
    }
  }
}
