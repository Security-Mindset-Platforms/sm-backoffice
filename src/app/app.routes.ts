import { Route } from '@angular/router';
import { ContentLayoutComponent } from './components/shared/layouts/content-layout/content-layout.component';
import { content } from './components/shared/routes/content.routes';
import { Error404Component } from './components/error/error404/error404.component';
import { AuthGuard } from './AuthGuard';
import { LogoutComponent } from './components/services/logout.service';
export const App_Route: Route[] = [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full',  data: { roles: [ 'SM_USER'] } },
      { path: '', component: ContentLayoutComponent, children: content, canActivate: [AuthGuard], data: { roles: [ 'SM_USER'] }},
      { path: 'logout', component: LogoutComponent,canActivate: [AuthGuard], data: { roles: [ 'SM_USER'] }},
      { path: '**', component: Error404Component, data: { roles: [ 'SM_USER'] } }
    ]
