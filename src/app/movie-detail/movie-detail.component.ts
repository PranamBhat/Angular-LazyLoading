import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public movieId;
  public movieData;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.movieData = history.state // to access data of movie
    this.movieId = this.activatedRoute.snapshot.params.id; // to access params

    console.log("Params movieId", this.movieId);
  }
}
