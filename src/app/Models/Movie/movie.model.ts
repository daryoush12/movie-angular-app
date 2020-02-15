export class Movie implements IMovie {

     Title : string;
     Director : string;
     ImageUrl : string;
     Description : string;

     constructor(title: string , director: string, url: string, desc:string ){
          this.Title = title;
          this.Director = director;
          this.ImageUrl = url;
          this.Description = desc;
     }

  
}

export interface IMovie {

     Title : string;
     Director : string;
     ImageUrl : string;

}