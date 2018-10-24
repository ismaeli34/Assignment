import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {RestApiService} from '../../services/rest-api.service';
import {Observable, Subject} from 'rxjs';

import {debounceTime} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() sendMovieName = new EventEmitter<string>();


  myControl = new FormControl();
  options: string[] = ['Venom', 'A Star is Born', 'The Predator', 'Halloween', 'First Man', 'The Nun', 'Mile 22', 'Johnny English Strikes Again', 'Incredibles 2', 'Goosebumps 2:Haunted Halloween', 'Smallfoot', 'Skyscrapper', 'Slender'];

  movieDropDownSuggestionLoad: Subject<string> = new Subject<string>();
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=99542193a43f32719300131d920bfa56&language=en-US&page=1&include_adult=false&query=';
  moviesList: any[] = [];

  constructor(private  restApiService: RestApiService) {

  }


  searchMovieName(term){
    console.log('Send movie Name  ---' + term);
    this.sendMovieName.emit(term);
    console.log(this.sendMovieName.emit(term));

  }

  movieSearchDropdown(term) {
    console.log('Entered movie search drop down');
    const url = this.baseUrl + term;
    console.log(url);
    this.movieDropDownSuggestionLoad.next(url);
  }

  ngOnInit() {

    /* this.movieDropDownSuggestionLoad
       .debounceTime(300)
       .distinctUntilChanged()
       .switchMap(term => this.restApiService.search(term))
       .subscribe(
         (v) => {
           console.log(v);
           this.moviesList = v;
         },
         (error) => {
           console.log(error);
           return Observable.of<any[]>([]);
         }
       );*/


  }

}
