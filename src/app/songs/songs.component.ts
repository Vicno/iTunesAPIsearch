import { Component } from '@angular/core';
import { JsonService } from '../shared/json.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
  providers: [JsonService],
})

export class SongsComponent {
  searchResults: Array<any> = [];

  constructor(private itunesService: JsonService) {}

  search(searchTerm) {
    try {
      this.itunesService.search(searchTerm).subscribe((results) => {
        this.searchResults = Object.values(results);
        console.log(this.searchResults);
      });
    } catch (error) {
      console.error('Api fetch data failed');
      console.log(error);
    }
  }
}
