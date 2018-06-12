import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Friend } from '../../shared/friend.model';
import { FriendsService } from '../../shared/friends.service';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {
  @Input() friend: Friend;
  @Output() likeEvent: EventEmitter<Friend> = new EventEmitter();

  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
  }

  like() {
    this.friend.fav = !this.friend.fav;

    // Send the updated Friend to the server
    this.friendsService.saveFriend(this.friend).subscribe(
      response => {
        console.log(response);

        // Emit to the parent so it can show the confirmation
        this.likeEvent.emit(this.friend);
      }
    );
  }
}
