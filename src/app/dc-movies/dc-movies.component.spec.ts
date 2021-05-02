import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCMoviesComponent } from './dc-movies.component';

describe('DCMoviesComponent', () => {
  let component: DCMoviesComponent;
  let fixture: ComponentFixture<DCMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
