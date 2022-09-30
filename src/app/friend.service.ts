import { Injectable } from '@angular/core';
import { Friend } from './friends';

@Injectable({
  providedIn: 'root'
})

export class FriendService {

  friends: Friend[] = [];

  constructor() { }

  addFriend(name: string, image: string, description: string) {
    this.friends.push({name, image, description});
  }

  removeFriend(name: string) {
    this.friends = this.friends.filter(friend => friend.name !== name);
  }

  isFriend(name: string): boolean {
      return this.friends.filter(friend => friend.name === name).length >= 1;
  }

}
