import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { Title } from '@angular/platform-browser';
import { Movie } from './movie.model';
import { Observable} from 'rxjs';
import { observe } from "rxjs-observe";


describe('MovieService', () => {
  let service: MovieService;
  let movie : Movie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve movie by id', () => {
    let observables, proxy  = observe(service.getMovie("AArtnM6WglGA2hSUX7iA"));
    observables.name.subscribe(name => console.log(name));
   //console.log(proxy.Title);
    expect(movie).toBe(true);
  });
});
