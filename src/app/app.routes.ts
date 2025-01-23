import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
    data: { routeTitle: 'Overview' },
  },
  {
    path: 'setting',
    component: SettingsComponent,
    data: { routeTitle: 'Setting' },
  },
  { path: '', redirectTo: '/overview', pathMatch: 'full' }, // Default route
];
