import { Component} from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Movie } from 'src/app/Models/Movie/movie.model';
import { MovieService } from 'src/app/Models/Movie/movie.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import 'firebase/storage';
import { stringify } from 'querystring';
import { MoviesListAnimations } from '../Movies-list/movies-list.animations';



@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
  animations: MoviesListAnimations
})

export class MovieEditComponent {
  title = 'Add Movie';

  formSuccess : boolean;
  movieservice : MovieService;
  movieUrl : Observable<string>;
  uploadPercent: Observable<number>;
  test;
  filename: string;

  constructor(private ms : MovieService, private storage : AngularFireStorage){
     this.movieservice = ms;
   
  }

 onAddItem(form :NgForm){
 
    const value = form.value;
    console.log(value.Url);
    const newmovie = new Movie(value.Title, value.Director, this.filename, value.Description);
    this.movieservice.createMovie(newmovie);
    this.formSuccess = true;
 }

 uploadFile(files) {
  const file = files[0];
  this.filename = files[0].name

  const filePath = 'movie-images/'+files[0].name;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);

  this.uploadPercent = task.percentageChanges();

  task.snapshotChanges().pipe(
  finalize(() => this.movieUrl = fileRef.getDownloadURL()))
  .subscribe()
}
}
