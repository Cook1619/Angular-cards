import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  async constructor(){
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b3dc3c74bda0e67618520877ad08c7c8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }
  

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
