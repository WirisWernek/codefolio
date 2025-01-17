import { Routes } from '@angular/router';

export const VIEWS_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'atualizacoes',
    loadComponent: () =>
      import('./atualizacoes/atualizacoes.component').then(
        (m) => m.AtualizacoesComponent
      ),
  },
  // {
  // 	path: 'contato',
  // },
  {
    path: 'recomendacoes',
    loadComponent: () =>
      import('./recomendacoes/recomendacoes.component').then(
        (m) => m.RecomendacoesComponent
      ),
  },
  {
    path: 'links',
    loadComponent: () =>
      import('./social/social.component').then((m) => m.SocialComponent),
  },
  {
    path: 'stacks',
    loadComponent: () =>
      import('./stacks/stacks.component').then((m) => m.StacksComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projetos/projetos.component').then((m) => m.ProjetosComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./sobre/sobre.component').then((m) => m.SobreComponent),
  },
  {
    path: 'github',
    loadComponent: () =>
      import('./github/github.component').then((m) => m.GithubComponent),
  },
  {
    path: 'buscar',
    loadComponent: () =>
      import('./buscar/buscar.component').then((m) => m.BuscarComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
