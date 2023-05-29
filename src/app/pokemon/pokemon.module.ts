import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { HoverCardDirective } from './hover-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PokemonService } from './pokemon.service';

const pokemonRoutes: Routes = [
	{ path: "pokemons", component: ListPokemonComponent },
	{ path: "pokemon-details/:id", component: DetailPokemonComponent },
	{ path: "pokemon-edit/:id", component: EditPokemonComponent },
];

@NgModule({
	declarations: [
		HoverCardDirective,
		PokemonTypeColorPipe,
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(pokemonRoutes),
		ChipModule,
		ButtonModule,
		CardModule,
	],
	providers: [PokemonService]
})
export class PokemonModule { }
