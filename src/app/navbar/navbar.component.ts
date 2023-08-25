import { Component } from '@angular/core';

type Link = {
  id : string;
  imageUrl : string;
  target : string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  linklist = [
    { id : "Home", imageUrl : "/dist/assets/heroicons/home.svg", target : "#" }
  ]
}
