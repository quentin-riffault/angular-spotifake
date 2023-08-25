import { Injectable } from '@angular/core';
import { mockSongs } from './mockSongs';


@Injectable({
  providedIn: 'root'
})
export class SongService {
  getSong(id : string) {
    return mockSongs[id];
  }
}
