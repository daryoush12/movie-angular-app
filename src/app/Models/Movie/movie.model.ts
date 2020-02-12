export class Movie implements IMovie {

     Title : string;
     Director : string;

     constructor(title: string , director: string ){
          this.Title = title;
          this.Director = director;
     }
}

export interface IMovie {

     Title : string;
     Director : string;
}