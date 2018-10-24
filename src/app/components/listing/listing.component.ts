import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestApiService} from '../../services/rest-api.service';
import {MoviesModel} from '../../models/movies.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Output() selectMovieId = new EventEmitter<string>();

  apiUrl: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=99542193a43f32719300131d920bfa56';

  imageapiUrl: string = 'https://image.tmdb.org/t/p/w500';

  movieList: MoviesModel = new MoviesModel();



  constructor(private restApiService: RestApiService) {


  }




  showCardDetails(movieId: any) {
    console.log('movie Id---' + movieId);
    this.selectMovieId.emit(movieId);
    console.log(this.selectMovieId.emit(movieId));
  }

  ngOnInit() {
    this.getMoviesData();
  }



  getMoviesData(): void {
    this.restApiService
      .getRequest(this.apiUrl, 0)
      .subscribe(

        (response) => {
          // console.log(response);
          this.movieList = response;
          console.log('Movie Details');
          console.log(this.movieList);

          // this.passCustomerL̥Details(response);
        },
        error => {

        }
      );


  }


}
