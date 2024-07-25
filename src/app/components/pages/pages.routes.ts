import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './settings/accountSettings/account_settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const admin: Routes = [
  {
    path: '', children: [
      { path: 'settings', component: AccountSettingsComponent },
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.routes').then((m) => m.DashboardRoutingModule),
      },
     
      {
        path: 'auth-providers',
        loadComponent: () =>
          import('./auth_providers/auth_providers.component').then(
            (m) => m.AuthProvidersComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.component').then((m) => m.NotificationsComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      // research tools routes
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class pagesRoutingModule {
  static routes = admin;
}