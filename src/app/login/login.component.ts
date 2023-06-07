import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username: string
	password: string
	progress: boolean
	auth: AuthService

	constructor(
		private authService: AuthService,
		private router: Router,
		private notificationService: NotificationService
	) { }

	ngOnInit(): void {
		this.auth = this.authService
	}

	login() {
		if (!this.username) {
			this.notificationService.showError("Le nom de l'utilisateur est réquis")
			return
		}
		if (!this.password) {
			this.notificationService.showError("Le mot de passe est réquis")
			return
		}
		this.progress = true
		this.authService.login(this.username, this.password).subscribe(
			(isLoggedIn) => {
				this.progress = false
				if (isLoggedIn) {
					this.notificationService.showSuccess("Connecter avec succèss")
					this.router.navigate(["/pokemons"])
				} else {
					this.notificationService.showError("Erreur de connection")
					this.notificationService.showError("Nom d'utilisateur ou mot de passe incorrect, veillez réessayer")
					this.password = ""
				}
			}
		)
	}

	logout() {
		this.authService.logout()
		// this.isLoggedIn = this.authService.isLoggedIn
	}

}
