import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  templateUrl: './hamster-card.component.html',
  styleUrls: ['./hamster-card.component.scss']
})
export class HamsterCardComponent implements OnInit {

  @Input() text: string = '';
  @Input() img: string = 'assets/img/hamster/1.jpg';
  likes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addLike() {
    this.likes++;
  }

  showAlert(msg: string) {
    alert(msg);
  }

}
