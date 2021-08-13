import { AuthService } from './../services/auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanLoad {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean
  {
    return this.verficarAcesso();
  }

  private verficarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log("verifica acesso Canload");
    return true//this.verficarAcesso();
  }
}
