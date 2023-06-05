import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/service/movie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movieForm: Movie = {
    id: 0,
    name: '',
    year: 0,
    isWinner: false
  }

  constructor(private service: MovieService) { }

  ngOnInit() {
  }

  save(): void {
    this.service.getMovies.push({
      id: this.movieForm.id,
      name: this.movieForm.name,
      year: this.movieForm.year,
      isWinner: this.movieForm.isWinner
    });
  }

}
