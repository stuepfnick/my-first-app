import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {

  @Input() name: string = 'Frederik';
  @Input() image: string = 'assets/img/hamster/1.jpg';
  @Input() description: string = '3 Jahre alt';
  @Input() canFollow: boolean = true;

  constructor(public fs: FriendService) { }

  ngOnInit(): void {
  }
}
