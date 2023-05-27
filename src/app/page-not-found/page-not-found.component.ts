import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page-not-found',
	template: `
		<div class="page-not-found">
			<div class="status-code">
				<h1>
					404
				</h1>
				<img class="not-found-image" src="../../assets/pokemon_images/293.png">
			</div>
			<div>
				<h3>
					Cette page est introuvable
				</h3>
			</div>
			<p-button label="Retour à la liste des pokemons" icon="pi pi-angle-left" class="return-btn" styleClass="p-button-text p-button-primary"
					(click)="returnButton()"></p-button>
	</div>
  `,
	styles: [`
		.page-not-found {
			 text-align: center; 
			}
		.status-code h1{
			font-size: 4rem;
			color: red;
			color: red;
			font-weight: bold;
			letter-spacing: 1.5rem;
		}
		.not-found-image{
			max-height: 50vh;
			max-width: 90vw;
		}
	`]
})
export class PageNotFoundComponent {
	constructor(private route: Router) { }

	returnButton(name?: string) {
		this.route.navigate([`/pokemons`]);
	}
}
