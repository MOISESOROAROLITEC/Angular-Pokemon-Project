import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { HoverCardDirective } from './hover-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

@NgModule({
	declarations: [
		AppComponent,
		HoverCardDirective,
		PokemonTypeColorPipe,
		ListPokemonComponent,
		DetailPokemonComponent,
  EditPokemonComponent
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
