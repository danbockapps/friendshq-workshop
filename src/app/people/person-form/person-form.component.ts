import { Component, OnInit } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { Gender } from '../../shared/gender.enum';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  model: Friend;
  genders = Gender;

  constructor() {
    this.model = {
      id: null,
      firstName: null,
      lastName: null,
      fav: false,
      gender: null
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submitting . . .");

  }
}
