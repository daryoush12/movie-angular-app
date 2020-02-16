import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ErrorComponent', () => {

    let de: DebugElement;
    let fixture : ComponentFixture<ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ErrorComponent,
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(ErrorComponent);
    de = fixture.debugElement;
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ErrorComponent);
    const error = fixture.componentInstance;
    expect(error).toBeTruthy();
  });

  it('should render error message', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('404 Page not found');
  });
});
