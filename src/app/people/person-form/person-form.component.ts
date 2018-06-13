import { Component, OnInit } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { Gender } from '../../shared/gender.enum';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FriendsService } from '../../shared/friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  model: Friend;
  genders = Gender;
  addNewPersonForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private friendService: FriendsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addNewPersonForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fav: [false],
      gender: [this.genders]
    });

    /*

    If I had data I wanted to populate the form with, I could create this model...

    this.model = {
      id: null,
      firstName: null,
      lastName: null,
      fav: false,
      gender: null
    };

    ... and then do this

    this.addNewPersonForm.setValue(this.model);

    In this case, since we are not pre-populating, we don't need a model object at all.
    When we send data to the server, it will be the form object, not the model.

    */
  }

  onSubmit() {
    this.friendService.addFriend(this.addNewPersonForm.getRawValue()).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['people']);
      }
    );
  }
}
