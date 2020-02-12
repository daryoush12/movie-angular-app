import {Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import {MovieService } from '../../Models/Movie/movie.service';
import {Movie} from '../../Models/Movie/movie.model';

@Component({
  selector: 'movieslist',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent {

  movies = new Observable<Movie[]>();
  

  constructor(private movieservice : MovieService){

    this.movies = movieservice.getMovies();
  }

 
}
