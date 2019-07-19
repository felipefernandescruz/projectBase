import { Routes } from "@angular/router";
import { AppGuard } from "src/app/app.guard";
import { userRoutes } from "../User/user.router";

// Route Configuration
export const authRoutes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    canActivate: [AppGuard],
    path: "login",
    loadChildren: "./login/login.module#LoginPageModule"
  }
  // {
  //   canActivate: [AppGuard],
  //   path: "user/new",
  //   loadChildren: "../user/user-form/user-form.module#UserFormPageModule"
  // }
];
