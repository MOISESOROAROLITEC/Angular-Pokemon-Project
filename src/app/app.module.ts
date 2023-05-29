import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
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
