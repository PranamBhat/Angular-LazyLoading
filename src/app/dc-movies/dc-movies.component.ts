import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-movies',
  templateUrl: './dc-movies.component.html',
  styleUrls: ['./dc-movies.component.css']
})
export class DCMoviesComponent implements OnInit {

  public movies = [
    {
      id: "1",
      name: "THE DARK KNIGHT",
    },
    {
      id: "2",
      name: "MAN OF STEEL",
    },
    {
      id: "3",
      name: "WONDER WOMAN",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
