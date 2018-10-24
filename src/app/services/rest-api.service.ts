import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  protected httpClient: HttpClient;
  protected httpHeaders: HttpHeaders;
  protected requestOptions;
  public subscriptionDialog: number;

  clientID: string = 'PAST YOUR CLIENT ID';
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=99542193a43f32719300131d920bfa56&language=en-US&page=1&include_adult=false&query=';



  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  }


  /**
   * func to cal api using get Request
   * with HttpClient class
   * @param url api address
   * @param retry number of attempts in-case of no response
   * @returns {Observable<ArrayBuffer>} response returned
   */
  getRequest(url: string, retry: number): Observable<any> {
    console.log({headers: this.httpHeaders});
    console.log(url);
    return this.httpClient.get(url, {headers: this.httpHeaders});
  }

  search(url: string): Observable<any> {
    console.log({headers: this.httpHeaders});
    console.log(url);
    return this.httpClient.get(url, {headers: this.httpHeaders});
  }



  /**
   * func to make post request
   * for creating new records on server
   * @param url api address
   * @param payload payload for get request
   * @param retry number of attempts in-case of connection failure
   * @returns {MonoTypeOperatorFunction<>} response returned
   */
  postRequest(url: string, payload: any, retry: number): Observable<any> {
    return this.httpClient.post(url, payload, {headers: this.httpHeaders});
  }

  /**
   * func to delete record on api using
   * http
   * @param url
   * @returns {Observable<any>}
   */
  deleteRequest(url): Observable<any> {
    return this.httpClient.delete(url, {headers: this.httpHeaders});
  }

  /**
   * func to make update request
   * on api data
   * @param url
   * @param putBody
   * @returns {Observable<any>}
   */
  puRequest(url, putBody): Observable<any> {
    return this.httpClient.put(url, putBody, {headers: this.httpHeaders});
  }
}
