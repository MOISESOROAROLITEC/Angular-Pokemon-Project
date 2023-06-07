import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class PermissionsService {
	constructor(
		private authService: AuthService,
		private router: Router
	) { }
	canActivate(): boolean {
		if (this.authService.isLoggedIn()) {
			return true
		} else {
			this.router.navigate(["login"])
			return false
		}

	}
};

export const AuthGuard: CanActivateFn = (route, state) => {
	return inject(PermissionsService).canActivate();
};
