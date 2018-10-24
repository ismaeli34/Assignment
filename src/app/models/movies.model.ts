import {ResultModel} from './result.model';
import {DatesModel} from './dates.model';

export class MoviesModel {

  results: ResultModel[];
  page: number;
  total_results: number;
  dates: DatesModel;
  total_pages: number;

  constructor(){
    this.results = [];
    this.dates = new DatesModel();
  }



}


