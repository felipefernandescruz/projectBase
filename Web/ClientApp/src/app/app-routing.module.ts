import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppGuard } from "./app.guard";
import { authRoutes } from "./pages/auth/auth.router";
import { userRoutes } from "./pages/User/user.router";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  {
    canActivate: [AppGuard],
    path: "",
    loadChildren: "./pages/home/home.module#HomePageModule"
  },
  ...authRoutes,
  ...userRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
