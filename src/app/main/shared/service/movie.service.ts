import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [];

  constructor() { }

  get getMovies(): Movie[] {
    return this.movies;
  }

  start(): void {
    this.movies.push(
      { id: 1, name: 'Dr. No', year: 1962, isWinner: false },
      { id: 2, name: 'From Russia With Love', year: 1963, isWinner: false },
      { id: 3, name: 'Goldfinger', year: 1964, isWinner: false },
      { id: 4, name: 'Thunderball', year: 1965, isWinner: false },
      { id: 5, name: 'You Only Live Twice', year: 1967, isWinner: false },
      { id: 6, name: 'On Her Majesty^s Secret Service', year: 1969, isWinner: false },
      { id: 7, name: 'Diamonds Are Forever', year: 1971, isWinner: false },
      { id: 8, name: 'James Bond 007 Casino Royale', year: 1967, isWinner: false },
      { id: 9, name: 'Live and Let Die', year: 1973, isWinner: false },
      { id: 10, name: 'The Man with the Golden Gun', year: 1974, isWinner: false },
      { id: 11, name: 'For Your Eyes Only', year: 1981, isWinner: false },
      { id: 12, name: 'Never Say Never Again', year: 1983, isWinner: false },
      { id: 13, name: 'The Spy Who Loved Me', year: 1977, isWinner: false },
      { id: 14, name: 'Moonraker', year: 1979, isWinner: false },
      { id: 15, name: 'Octopussy', year: 1983, isWinner: false },
      { id: 16, name: 'A View to a Kill', year: 1985, isWinner: false },
      { id: 17, name: 'The Living Daylights', year: 1987, isWinner: false },
      { id: 18, name: 'Licence to Kill', year: 1989, isWinner: false },
      { id: 19, name: 'GoldenEye', year: 1995, isWinner: false },
      { id: 20, name: 'Tomorrow Never Dies', year: 1997, isWinner: false },
      { id: 21, name: 'The world is not enough', year: 1999, isWinner: false },
      { id: 22, name: 'Die Another Day', year: 2002, isWinner: false },
      { id: 23, name: 'Casino Royale', year: 2006, isWinner: false },
      { id: 24, name: 'Quantum of Solace', year: 2008, isWinner: false },
      { id: 25, name: 'Skyfall', year: 2012, isWinner: false }
    )
  }

}
