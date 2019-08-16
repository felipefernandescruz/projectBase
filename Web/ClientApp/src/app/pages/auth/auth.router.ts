import { Routes } from '@angular/router';
import { AppGuard } from 'src/app/app.guard';

// Route Configuration
export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    canActivate: [AppGuard],
    path: 'login',
    loadChildren: './pages/auth/login/login.module#LoginPageModule'
  }
];
