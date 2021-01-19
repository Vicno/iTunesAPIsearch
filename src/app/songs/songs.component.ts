import { Component } from '@angular/core';
import { JsonService } from '../shared/json.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
  providers: [JsonService]
})
export class SongsComponent {

  searchResults: Array<any> = [];
  artistId: number = 0;

  selectedArtist: string;

  constructor(private itunesService: JsonService) { }

  search(searchTerm) {
    this.itunesService.search(searchTerm).subscribe(results => {
      this.searchResults = Object.values(results);
      console.log(this.searchResults);
    });
  }

  getAlbums(artistId: number, artistName: string) {
    this.artistId = artistId;
    this.selectedArtist = artistName;
  }

}
