import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { StorageHelper } from "./shared/helpers/storage.helper";

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private router: Router, private storageHelper: StorageHelper) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const token = this.storageHelper.getToken();
    if (
      !token &&
      route.routeConfig.path !== "login" &&
      route.routeConfig.path !== "user/new"
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
