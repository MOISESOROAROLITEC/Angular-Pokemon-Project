import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDataService } from './in-memory-data.service';
import { PermissionsService } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
		FormsModule,
		ToastModule,
		PokemonModule,
		AppRoutingModule,
		ButtonModule,
		ProgressSpinnerModule,
	],
	providers: [MessageService, PermissionsService],
	bootstrap: [AppComponent]
})
export class AppModule {

}
