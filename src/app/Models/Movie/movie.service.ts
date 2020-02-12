import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Movie } from './movie.model';
import {IMovie} from './movie.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private itemDoc: AngularFirestoreDocument<Movie>;
  firestore : AngularFirestore;

  constructor(private store: AngularFirestore ) {
   }

  getMovies() : Observable<Movie[]>{
    return this.store.collection<Movie>('movies').valueChanges({idField:'propertyId'});
    //this.userDoc.collection<Task>('tasks').valueChanges();
  }


  getMovie(id: string): Observable<Movie> {
    this.itemDoc = this.store.doc('movies/'+id);
    console.log(this.itemDoc.valueChanges());
    return this.itemDoc.valueChanges();

  }

  

  createMovie(movie : Movie){
    var data = {...movie}
    return this.store.collection<Movie>('movies').add({...movie});
  }

  
}
