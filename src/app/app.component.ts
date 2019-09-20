import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBmaNt0Q2jI-f5gaseD7oiLc_QjbUweyjo',
  authDomain: 'angular-maps-253512.firebaseapp.com',
  databaseURL: 'https://angular-maps-253512.firebaseio.com/',
  projectId: 'angular-maps-253512',
  storageBucket: 'YOUR_STORAGE_BUCKET',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-maps';

  constructor() {
    firebase.initializeApp(config);
  }
}
