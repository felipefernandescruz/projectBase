import { Routes } from "@angular/router";
import { AppGuard } from "src/app/app.guard";

// Route Configuration
export const userRoutes: Routes = [
  {
    canActivate: [AppGuard],
    path: "user/new",
    loadChildren: "./user-form/user-form.module#UserFormPageModule"
  }
];
