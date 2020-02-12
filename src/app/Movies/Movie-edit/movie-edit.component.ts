import { Component} from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Movie } from 'src/app/Models/Movie/movie.model';
import { MovieService } from 'src/app/Models/Movie/movie.service';





@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})

export class MovieEditComponent {
  title = 'Add Movie';
  movieservice : MovieService;
  

  constructor(private ms : MovieService){
     this.movieservice = ms;
  }

 onAddItem(form :NgForm){
    const value = form.value;
    const newmovie = new Movie(value.Title, value.Director)
   this.movieservice.createMovie(newmovie);
 }
}
