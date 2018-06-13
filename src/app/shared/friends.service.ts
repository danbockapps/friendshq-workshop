import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Friend } from "./friend.model";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  readonly headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(private httpClient: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>('http://localhost:3000/friends');
  }

  saveFriend(friend: Friend) {
    return this.httpClient.put<Friend>(
      `http://localhost:3000/friends/${friend.id}`,
      friend,
      { headers: this.headers }
    );
  }

  addFriend(friend: Friend) {
    return this.httpClient.post<Friend>(
      `http://localhost:3000/friends`,
      friend,
      { headers: this.headers }
    );
  }
}
