import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { HoverCardDirective } from './pokemon/hover-card.directive';
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';

@NgModule({
	declarations: [
		AppComponent,
		HoverCardDirective,
		PokemonTypeColorPipe,
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		ChipModule,
		ButtonModule,
		CardModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
