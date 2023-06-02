import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';

import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		PokemonModule,
		AppRoutingModule,
		ButtonModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
