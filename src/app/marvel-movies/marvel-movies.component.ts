import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-movies',
  templateUrl: './marvel-movies.component.html',
  styleUrls: ['./marvel-movies.component.css']
})
export class MarvelMoviesComponent implements OnInit {

  public movies = [
    {
      id: "1",
      name: "CAPTAIN AMERICA: THE FIRST AVENGER",
    },
    {
      id: "2",
      name: "DOCTOR STRANGE",
    },
    {
      id: "3",
      name: "IRON MAN",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
