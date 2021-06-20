import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginServiceService } from "./login-service.service";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor( 
        private loginService: LoginServiceService, 
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isLoggedIn;
    }
}