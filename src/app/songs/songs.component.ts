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
  trackId: number = 0;
  artist: string;
  album: string;
  date: string;
  price: number;
  image: string;

  selectedSong: string;

  constructor(private itunesService: JsonService) { }

  search(searchTerm) {
    this.itunesService.search(searchTerm).subscribe(results => {
      this.searchResults = Object.values(results);
      console.log(this.searchResults);
    });
  }

  getAlbums(trackId: number, trackName: string, artistName: string, collectionName: string, releaseDate: string, trackPrice: number, artworkUrl100: string) {
    this.trackId = trackId;
    this.selectedSong = trackName;
    this.artist = artistName;
    this.album = collectionName;
    this.date = releaseDate;
    this.price = trackPrice;
    this.image = artworkUrl100;
    
  }

}
