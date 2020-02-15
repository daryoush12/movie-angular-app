import {Injectable} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

export class  DataStorageService {

    constructor(private storage : AngularFireStorage){
        
      
     }

    getImageUrl(name : string) : Observable<string>{
        console.log(name);
        const ref = this.storage.ref('movie-images/'+name);
        return ref.getDownloadURL();
    }

    


} 