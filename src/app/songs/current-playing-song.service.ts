import { Injectable } from '@angular/core';
import { SongService } from './song.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentPlayingSongService {

  currentPlayingSongID = "000";

  constructor(private songCollection : SongService){}

  get(){
    return this.songCollection.getSong(this.currentPlayingSongID);
  }

  set(id : string){
    this.currentPlayingSongID = id; 
  }
}
