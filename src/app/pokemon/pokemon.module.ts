import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { HoverCardDirective } from './hover-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';
import { FormPokemonComponent } from './form-pokemon/form-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

const pokemonRoutes: Routes = [
	{ path: "pokemons", component: ListPokemonComponent },
	{ path: "details-pokemon/:id", component: DetailPokemonComponent },
	{ path: "edit-pokemon/:id", component: EditPokemonComponent },
	{ path: "create-pokemon", component: CreatePokemonComponent },
];

@NgModule({
	declarations: [
		HoverCardDirective,
		PokemonTypeColorPipe,
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		FormPokemonComponent,
		PageNotFoundComponent,
		CreatePokemonComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(pokemonRoutes),
		ChipModule,
		ButtonModule,
		CardModule,
		SpeedDialModule,
		InputTextModule,
		FormsModule,
		FileUploadModule
	],
	providers: [PokemonService]
})
export class PokemonModule { }
