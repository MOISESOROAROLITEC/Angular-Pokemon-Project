import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pokemon } from "../../models";

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.scss"],
})
export class PokemonCardComponent {
  @Input({ required: true }) pokemon: Pokemon;
  @Output() onclick = new EventEmitter<number>();

  onShowDetail(id: number) {
    this.onclick.emit(id);
  }
}
