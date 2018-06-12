import { Component, OnInit } from '@angular/core';
import { Friend } from '../../shared/friend.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent implements OnInit {
  friends: Friend[];
  displayBanner: boolean = false;

  constructor() {
    this.friends =
      [
        {
          "id": 1,
          "firstName": "Dwight",
          "lastName": "Evans",
          "gender": "female",
          "fav": true
        },
        {
          "id": 2,
          "firstName": "Marty",
          "lastName": "Barrett",
          "gender": "male",
          "fav": true
        },
        {
          "id": 3,
          "firstName": "Jim",
          "lastName": "Rice",
          "gender": "none",
          "fav": false
        },
        {
          "id": 4,
          "firstName": "Mike",
          "lastName": "Greenwell",
          "gender": "male",
          "fav": true
        }
      ];


  }

  ngOnInit() { }

  showBanner(friend: Friend) {
    this.displayBanner = true;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  };
}
