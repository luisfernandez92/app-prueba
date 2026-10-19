import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: 'list',
    title: 'Listado de autos',
    loadComponent: () => import('./cars/list.component').then((m) => m.ListComponent)
  },
  { path: '**', redirectTo: 'list' }
];
