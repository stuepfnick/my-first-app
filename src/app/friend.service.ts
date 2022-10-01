import { Injectable, OnInit } from '@angular/core';
import { Friend } from './friends';

@Injectable({
  providedIn: 'root'
})

export class FriendService {

  friends: Friend[] = [];

  constructor() { 
    this.loadFriends();
  }

  addFriend(name: string, image: string, description: string) {
    this.friends.push({name, image, description});
    this.saveFriends();
  }

  removeFriend(name: string) {
    this.friends = this.friends.filter(friend => friend.name !== name);
    this.saveFriends();
  }

  isFriend(name: string): boolean {
      return this.friends.filter(friend => friend.name === name).length >= 1;
  }

  saveFriends() {
    localStorage.setItem('hamsterFriends', JSON.stringify(this.friends));
  }

  loadFriends() {
    let data = localStorage.getItem('hamsterFriends');
    if (data !== null) {
      this.friends = JSON.parse(data);
    }
  }

}
