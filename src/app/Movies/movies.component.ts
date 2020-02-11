import { Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import {MovieService } from '../Models/Movie/movie.service';
import {Movie} from '../Models/Movie/movie.model';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  title = 'my-dream-app';
  movies = new Observable<Movie[]>();
  

  constructor(private movieservice : MovieService){

    //this.movies = this.firestore.collection('movies').valueChanges({idField: 'propertyId' });
    this.movies = movieservice.getMovies();
  }

 
}
