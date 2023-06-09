import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-spiner',
	templateUrl: './spiner.component.html',
	styleUrls: ['./spiner.component.scss']
})
export class SpinerComponent {
	@Input() loadingPokemon: boolean

}
