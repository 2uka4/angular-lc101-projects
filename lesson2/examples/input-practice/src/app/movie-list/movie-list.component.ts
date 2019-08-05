import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   duplicate = '';

   addMovie (newMovie: string) {
      if(!this.movies.includes(newMovie)){
         this.movies.push(newMovie);
      } else {
         this.duplicate = newMovie;
      }
      return this.duplicate;
   }

   constructor() { }

   ngOnInit() {
   }
}