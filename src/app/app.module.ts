import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './Material/material-module';
import { AppComponent } from './app.component';
import {MoviesComponent} from './Movies/movies.component';
import {ErrorComponent} from './404/error.component';
import {MoviesListComponent} from './Movies/Movies-list/movies-list.component'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MovieDetailComponent } from './Movies/Movie-detail/movie-detail.component';
import { MovieEditComponent } from './Movies/Movie-edit/movie-edit.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MovieImagePipe } from './Models/Movie/movie.pipe';



const appRoutes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    data: { title: 'Movies List' }
  },
  {
    path: 'movies/add',
    component: MovieEditComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent}
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // other imports here
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MovieEditComponent,
    ErrorComponent,
    MainNavComponent,
    MovieImagePipe
    
    
  ],
  providers:[],
  bootstrap: [ AppComponent ],

  
})


export class AppModule { }


