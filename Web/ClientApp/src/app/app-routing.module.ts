import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';
import { authRoutes } from './pages/auth/auth.router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    canActivate: [AppGuard],
    path: '',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  ...authRoutes,
  {
    canActivate: [AppGuard],
    path: 'user/new',
    loadChildren: './pages/user/user-form/user-form.module#UserFormPageModule'
  },
  {
    path: 'user/athentication/:userEmail',
    loadChildren:
      './pages/user/user-athentication/user-athentication.module#UserAthenticationPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
