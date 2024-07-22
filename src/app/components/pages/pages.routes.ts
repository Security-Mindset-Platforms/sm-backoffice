import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './settings/accountSettings/account_settings.component';

export const admin: Routes = [
  {
    path: '', children: [
      { path: 'settings', component: AccountSettingsComponent },
      
     
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