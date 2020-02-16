import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import {MovieService } from '../../Models/Movie/movie.service';
import {Movie} from '../../Models/Movie/movie.model';

@Component({
  selector: 'movie',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent {
  movie_id : string;
  movie : Observable<Movie>;
  title : String;


  constructor(private actRoute: ActivatedRoute, private movieservice: MovieService){
    this.movie_id = this.actRoute.snapshot.params.id;
    this.movie = movieservice.getMovie(this.movie_id);
  }

}
