import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainClimber',
      content: 'I climbed this snowy mountain',
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking',
      content: 'I rode this bike on that mountain',
    },
    {
      title: 'Skydiving',
      imageUrl: 'assets/mountain.jpeg',
      username: 'skydiver',
      content: 'Skydiving over that mountain',
    },
  ];
}
