import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Friend } from '../../shared/friend.model';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {
  @Input() friend: Friend;
  @Output() likeEvent: EventEmitter<Friend> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.friend.fav = !this.friend.fav;

    // Emit to the parent so it can send data to the server
    // and show the confirmation
    this.likeEvent.emit(this.friend);
  }
}
