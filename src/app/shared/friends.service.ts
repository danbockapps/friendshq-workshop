import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Friend } from "./friend.model";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.httpClient.get<Friend[]>('http://localhost:3000/friends');

  }
}
