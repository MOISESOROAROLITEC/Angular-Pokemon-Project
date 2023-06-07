import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	redirectUrl: string
	constructor() { }

	isLoggedIn(): boolean {
		return Boolean(localStorage.getItem("isConnected"))
	}

	connect() {
		localStorage.setItem("isConnected", "true")
	}

	desconnect() {
		localStorage.removeItem("isConnected")
	}

	login(name: string, password: string): Observable<boolean> {
		const isLoggedIn = (name === "soro" && password === "soro")

		return of(isLoggedIn).pipe(
			delay(1000),
			tap(isLoggedIn => {
				if (isLoggedIn) {
					this.connect()
				}
			})
		)
	}

	logout() {
		this.desconnect()
	}

}
