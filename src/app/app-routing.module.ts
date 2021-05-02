import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarvelMoviesComponent } from './marvel-movies/marvel-movies.component';
import { DCMoviesComponent } from './dc-movies/dc-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lazy-loading',
    loadChildren: () => import('./lazy-loading/lazy-loading.module')
      .then(m => m.LazyLoadingModule)
  },

  {
    path: 'marvel-movies',
    children: [
      {
        path: '',
        component: MarvelMoviesComponent
      },
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ]
  },
  {
    path: 'dc-movies',
    children: [
      {
        path: '',
        component: DCMoviesComponent,
      },
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
