import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traxsmart-assignment';
  id: number;
  movieName: string;

  getMovieId(data): void {
    console.log('Data----', data);
    this.id = data;
    console.log('Id', this.id);

  }

  getSearchMovieName(movieName): void{
    this.movieName = movieName;
    console.log('APP COMPONENT MOVIE NAME', this.movieName);

  }
}
