import {Component} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import {MovieService } from '../../Models/Movie/movie.service';
import {Movie} from '../../Models/Movie/movie.model';
import { MoviesListAnimations } from './movies-list.animations';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'movieslist',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  animations: MoviesListAnimations
})

export class MoviesListComponent {

  movies = new Observable<Movie[]>();
  data : DataStorageService;

 
  constructor(private movieservice : MovieService, private dataservice: DataStorageService){

    this.movies = movieservice.getMovies();
    this.data = dataservice;
   
  }
}
