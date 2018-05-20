import { Injectable } from '@angular/core';
import {
  CanActivate, Router, Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import AppStateService from './app-state.service';

@Injectable()
export default class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private appState: AppStateService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    // let url = `/${route.path}`;
    // return this.checkLogin(window.location.pathname);
    return this.checkLogin('/dashboard/home');
  }

  checkLogin(url: string): boolean {
    if (this.appState.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.appState.redirectUrl = url;

    // Navigate to the login page
    this.router.navigate(['/sign/login']);
    return false;
  }
}