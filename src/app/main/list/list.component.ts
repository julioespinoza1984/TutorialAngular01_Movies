import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/service/movie.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.movies = this.service.getMovies;
  }

  start(): void {
    this.service.start();
  }
}
