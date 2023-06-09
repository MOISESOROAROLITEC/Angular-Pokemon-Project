import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailPokemonComponent } from './containers/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './containers/edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './containers/list-pokemon/list-pokemon.component';
import { HoverCardDirective } from './hover-card.directive';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';
import { FormPokemonComponent } from './components/form-pokemon/form-pokemon.component';
import { CreatePokemonComponent } from './containers/create-pokemon/create-pokemon.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { AuthGuard } from '../auth/auth.guard';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const pokemonRoutes: Routes = [
	{ path: "pokemons", component: ListPokemonComponent, canActivate: [AuthGuard] },
	{ path: "pokemons/details/:id", component: DetailPokemonComponent, canActivate: [AuthGuard] },
	{ path: "pokemons/edit/:id", component: EditPokemonComponent, canActivate: [AuthGuard] },
	{ path: "pokemons/create", component: CreatePokemonComponent, canActivate: [AuthGuard] },
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
		PokemonCardComponent,
		SearchPokemonComponent,
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
		ProgressSpinnerModule,
	],
	providers: [PokemonService]
})
export class PokemonModule { }
