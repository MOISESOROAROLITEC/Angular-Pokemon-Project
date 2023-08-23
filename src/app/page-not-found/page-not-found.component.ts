import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.scss"],
})
export class PageNotFoundComponent {
  @Input() message: string = "Cette page est introuvable";

  constructor(private route: Router) {}

  returnButton(name?: string) {
    this.route.navigate([`/pokemons`]);
  }
}
