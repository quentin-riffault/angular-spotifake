import { Component, Input } from '@angular/core';
import { SongService } from '../songs/song.service';
import { Song, mockSongs } from '../songs/mockSongs';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent {

  constructor(private songCollection : SongService){}

  @Input() id : string = "000";
  currentSong : Song = mockSongs[`${this.id}`];

  ngOnInit(){
    this.currentSong = this.songCollection.getSong(this.id);
  }

  likeThisSong(){
    this.currentSong.liked = !this.currentSong.liked;
  }

}
