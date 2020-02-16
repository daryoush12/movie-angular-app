import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import {MovieService } from '../../Models/Movie/movie.service';
import {Movie} from '../../Models/Movie/movie.model';
import { MoviesListAnimations } from './movies-list.animations';


@Component({
  selector: 'movieslist',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  animations: MoviesListAnimations
})

export class MoviesListComponent {

  movies = new Observable<Movie[]>();

 
  constructor(private movieservice : MovieService){

    this.movies = movieservice.getMovies();
   
  }
}
