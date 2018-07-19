import { Component } from '@angular/core';
import *as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){var config = {
    apiKey: "AIzaSyAfSwMtuSS7_c_Suse0GfUARc3ePN41rWc",
    authDomain: "angular5-95906.firebaseapp.com",
    databaseURL: "https://angular5-95906.firebaseio.com",
    projectId: "angular5-95906",
    storageBucket: "angular5-95906.appspot.com",
    messagingSenderId: "918233009766"
  };
  firebase.initializeApp(config);}
}
