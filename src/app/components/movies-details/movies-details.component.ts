import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MoviesModel} from '../../models/movies.model';
import {RestApiService} from '../../services/rest-api.service';
import {ResultModel} from '../../models/result.model';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit, OnChanges {

  @Input() movieId: any;
  @Input() movieName: any;
  apiUrl: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=99542193a43f32719300131d920bfa56';

  baseUrl: string = 'https://api.themoviedb.org/3/movie/';

  searchUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=99542193a43f32719300131d920bfa56&language=en-US&page=1&include_adult=false&query=';

  // movieList: MoviesModel = new MoviesModel();
  movieList: ResultModel = new ResultModel();
  searchMovie: MoviesModel = new MoviesModel();

  movies: MoviesModel = new MoviesModel();


  constructor(private restApiService: RestApiService) {
    console.log('Constructor Called');
    this.getMoviesData();
    this.searchMovies();

    // this.getMoviesData();



  }

  searchMovies(): void{

    console.log('search Movies method called');
    const url = this.searchUrl + '';
    this.restApiService.getRequest(url, 0)
      .subscribe(
        (response) => {
          this.searchMovie = response;
          console.log('--------Movie Search --------');

          console.log('--------');
          console.log(this.searchMovie);

          // this.passCustomerL̥Details(response);
        },
        error => {

        }
      );

  }

  ngOnChanges() {

    console.log('INPUT MOVIE ID', this.movieId);

    console.log('Movie Name', this.movieName);
    console.log('Base Url');
    console.log(this.baseUrl);
    this.passMovieId();



  }


  ngOnInit() {


    // this.getAllImages();



  }

  getMoviesData(): void {
    console.log('---------------Movies Details----------', this.apiUrl);
    this.restApiService
      .getRequest(this.apiUrl, 0)
      .subscribe(

        (response) => {
          // console.log(response);
          this.movies = response;
          console.log('Movie Details');
          console.log(this.movies);

          // this.passCustomerL̥Details(response);
        },
        error => {

        }
      );


  }

  passMovieId(): void {
    console.log('Pass Id method called');
    const url = this.baseUrl + this.movieId + '?api_key=99542193a43f32719300131d920bfa56';
    this.restApiService.getRequest(url, 0)
      .subscribe(
        (response) => {
          // console.log(response);
          this.movieList = response;
          console.log('Movie Details --------');

          console.log('--------');
          console.log(this.movieList);

          // this.passCustomerL̥Details(response);
        },
        error => {

        }
      );
  }

  /*  getAllImages(): void {


      this.restApiService
        .getRequest(this.imageapiUrl + ' ', 0)
        .subscribe(
          (response) => {
            // console.log(response);
            this.movieList = response;
            console.log('Movie Images');
            console.log(this.movieList);

            // this.passCustomerL̥Details(response);
          },
          error => {

          }
        );


    }*/

  /*  getMoviesData(): void {
      this.restApiService
        .getRequest(this.apiUrl, 0)
        .subscribe(
          (response) => {
            // console.log(response);
            this.movieList = response;
            console.log('Movie List');
            console.log(this.movieList);

            // this.passCustomerL̥Details(response);
          },
          error => {

          }
        );


    }*/


}
