import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValuesFromArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  getJson(): Observable<any>{
    return this.http.get<any>('https://itunes.apple.com/search?term=jack+johnson&limit=25');
  }
}
