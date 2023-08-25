import { Component } from '@angular/core';
import { CurrentPlayingSongService } from '../songs/current-playing-song.service';
import { Song, SongPlaceholder } from '../songs/mockSongs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  playing : Song = SongPlaceholder;

  constructor(private currentPlayingSong : CurrentPlayingSongService){}

  ngOnInit(){
    this.playing = this.currentPlayingSong.get()
  }

}
