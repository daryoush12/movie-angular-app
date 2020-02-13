import { Component} from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Movie } from 'src/app/Models/Movie/movie.model';
import { MovieService } from 'src/app/Models/Movie/movie.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import 'firebase/storage';
import { stringify } from 'querystring';



@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})

export class MovieEditComponent {
  title = 'Add Movie';

  formSuccess : boolean;
  movieservice : MovieService;
  movieUrl : Observable<string>;
  uploadPercent: Observable<number>;
  test : string;
  

  constructor(private ms : MovieService, private storage : AngularFireStorage){
     this.movieservice = ms;
  }

 onAddItem(form :NgForm){
 
    this.test = this.movieUrl[0];
    const value = form.value;
    console.log(this.movieUrl);
    const newmovie = new Movie(value.Title, value.Director, this.test)
    this.movieservice.createMovie(newmovie);
    this.formSuccess = true;
 }

 uploadFile(files) {
  const file = files[0];
  const filePath = 'movie-images';
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);
  // observe percentage changes
  this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
  task.snapshotChanges().pipe(
  finalize(() => this.movieUrl = fileRef.getDownloadURL() )
     )
    .subscribe()
}
}
