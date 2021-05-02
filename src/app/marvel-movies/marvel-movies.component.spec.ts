import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelMoviesComponent } from './marvel-movies.component';

describe('MarvelMoviesComponent', () => {
  let component: MarvelMoviesComponent;
  let fixture: ComponentFixture<MarvelMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
