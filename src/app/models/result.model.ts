import {GenresModel} from './Genre.model';
import {SpokenLanguagesModel} from './SpokenLanguages.model';

export class ResultModel {
  adult: boolean;
  budget: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  genres: GenresModel;
  homepage: string;
  id: number;
  imdb_id: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  status: string;
  spoken_languages: SpokenLanguagesModel;
  backdrop_path: string;
  constructor(){
    this.genres = new GenresModel();
    this.spoken_languages = new SpokenLanguagesModel();
  }

}
