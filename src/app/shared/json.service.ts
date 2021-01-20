import { Injectable } from '@angular/core';
import { HttpClientJsonpModule,HttpClientModule,HttpClient } from '@angular/common/http';

const API = {
  SEARCH: 'https://itunes.apple.com/search?',
  LOOKUP: 'https://itunes.apple.com/lookup?'
}

@Injectable()
export class JsonService {

  constructor(private http: HttpClient) {
  }

  public search(searchTerm)
  {
    const url = `${API.SEARCH}term=${searchTerm}&limit=24&entity=song`;
    //console.log("La url de busqueda es ", url);
    // Pass the key for your callback (in this case 'callback')
    // as the second argument to the jsonp method
    return this.http.jsonp(url, 'callback');
  }
}
