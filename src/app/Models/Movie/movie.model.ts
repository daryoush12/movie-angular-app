export class Movie implements IMovie {

     Title : string;
     Director : string;
     Url : string

     constructor(title: string , director: string, url: string ){
          this.Title = title;
          this.Director = director;
          this.Url = url;
     }
}

export interface IMovie {

     Title : string;
     Director : string;
     Url : string;
}