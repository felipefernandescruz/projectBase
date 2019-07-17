import { Routes } from "@angular/router";
import { AppGuard } from "src/app/app.guard";

// Route Configuration
export const userRoutes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    canActivate: [AppGuard],
    path: "login",
    loadChildren:
      "../user/user-register/user-register.module#UserRegisterPageModule"
  }
];
