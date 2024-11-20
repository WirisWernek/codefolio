import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
		loadChildren: () => import('./views/views.routes').then(m => m.VIEWS_ROUTES)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];
