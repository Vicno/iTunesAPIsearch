import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ItunesAPIsearch';
  url = 'https://itunes.apple.com/search?term=jack+johnson&limit=25';
  constructor(private http: HttpClient){
    
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    });
  }
}
