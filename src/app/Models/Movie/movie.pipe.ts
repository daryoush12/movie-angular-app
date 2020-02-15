import { Pipe, PipeTransform } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { storage } from 'firebase';
import { Observable } from 'rxjs';

@Pipe({name: 'MovieImagePipe'})
export class MovieImagePipe implements PipeTransform {


    constructor(private storage : DataStorageService){
 
    }

    transform(value: string): Observable<string> {
        console.log(value);
        return this.storage.getImageUrl(value);
    }
}