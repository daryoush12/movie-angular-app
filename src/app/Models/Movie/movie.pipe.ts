import { Pipe, PipeTransform } from '@angular/core';
import { storage } from 'firebase';
import { Observable } from 'rxjs';
import { MovieService } from './movie.service';

@Pipe({name: 'MovieImagePipe'})
export class MovieImagePipe implements PipeTransform {


    constructor(private movieservice : MovieService){
 
    }

    transform(value: string): Observable<string> {
        console.log(value);
        return this.movieservice.getImageUrl(value);
    }
}