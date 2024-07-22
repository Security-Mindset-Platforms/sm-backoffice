import { Route } from '@angular/router';
import { ContentLayoutComponent } from './components/shared/layouts/content-layout/content-layout.component';
import { content } from './components/shared/routes/content.routes';
import { Error404Component } from './components/error/error404/error404.component';

export const App_Route: Route[] = [
      { path: '', redirectTo: 'applications', pathMatch: 'full' },
      { path: '', component: ContentLayoutComponent, children: content },
      { path: '**', component: Error404Component }
    ]