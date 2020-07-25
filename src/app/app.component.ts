import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      userName: '@nature',
      img: 'assets/tree.jpeg',
      content: 'This is a picture of random stuff in here',
    },
    {
      title: 'Snowy Mountain',
      userName: '@mountain',
      img: 'assets/mountain.jpeg',
      content: 'This is a picture of random stuff in here',
    },
    {
      title: 'Biking Trail',
      userName: '@bikingGuy',
      img: 'assets/biking.jpeg',
      content: 'This is a picture of random stuff in here',
    },
  ];
}
