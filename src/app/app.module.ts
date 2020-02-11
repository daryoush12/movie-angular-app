import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './Material/material-module';
import { AppComponent } from './app.component';
import {MoviesComponent} from './Movies/movies.component';
import {MovieComponent} from './Movies/Movie/movie.component';
import {ErrorComponent} from './404/error.component';
import { HeaderComponent } from './Header/header.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    data: { title: 'Movies List' }
  },
  {
    path: 'movies/:id',
    component:MovieComponent
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    ErrorComponent,
    HeaderComponent
    
  ],
  providers:[],
  bootstrap: [ AppComponent ],

  
})


export class AppModule { }


