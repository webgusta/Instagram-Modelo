import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'insta';

  ngOnInit(): void{
    const firebaseConfig = {
      apiKey: "AIzaSyDz117z-COym0DK0ZusFSbHiKAecExEf5w",
      authDomain: "instagram-d1794.firebaseapp.com",
      projectId: "instagram-d1794",
      dataBaserUrl: "https://instagram-d1794-default-rtdb.firebaseio.com/",
      storageBucket: "instagram-d1794.appspot.com",
      messagingSenderId: "999624132032",
      appId: "1:999624132032:web:435ca2cb25970b42277425"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
