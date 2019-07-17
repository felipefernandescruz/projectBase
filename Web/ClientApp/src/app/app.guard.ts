import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { StorageHelper } from "./shared/helpers/storage.helper";

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private router: Router, private storageHelper: StorageHelper) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const token = this.storageHelper.getToken();
    console.log(route.routeConfig.path);
    if (
      !token &&
      route.routeConfig.path !== "login" &&
      route.routeConfig.path !== "reset-password/:token"
    ) {
      this.router.navigate(["login"]);
      return false;
    }

    if (!token && route.routeConfig.path === "login") {
      return true;
    }

    return true;
  }
}
