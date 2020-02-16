import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MovieService } from '../../Models/Movie/movie.service';
import { MoviesListComponent } from './movies-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import {Movie} from '../../Models/Movie/movie.model';
import { AngularFireStorage } from '@angular/fire/storage';

describe('MovieListComponent', () => {

    let fixture : ComponentFixture<MoviesListComponent>;
    let component : MoviesListComponent;
    let de : DebugElement;
    let service: MovieService;
    let spy: jasmine.Spy;
    let movies : Movie[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
      ],
      declarations: [ MoviesListComponent ],
      providers: [ MovieService]
    })
    .compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = de.injector.get(MovieService);
   
    spy = spyOn(service, 'getMovies');
    fixture.detectChanges();
  });


  it('should retrieve movies', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length ).toEqual(1);

    expect(de.query(By.css('.movies-container')).children.length).toBeGreaterThan(0);
  });
});
