import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-newsticker',
  templateUrl: './ngx-newsticker-albe.component.html',
  styleUrls: ['./ngx-newsticker-albe.component.css']
})
export class NgxNewstickerAlbeComponent implements OnInit {
  @Input() title = '';
  @Input() events: Array<string> = [];
  // Sets the auto navigate to next event
  @Input() auto = true;
  // Sets the current count visibility
  @Input() showCounter = true;

  private ACTIONS = {
    'NEXT': 1,
    'PREV': -1
  };

  autoNext: any;
  item: string;
  current: string;
  position = -1;

  constructor() {
    this.autoNext = setInterval(() => this.navigate('NEXT'), 3000);
  }

  ngOnInit() {
    this.navigate('NEXT');

    if (this.auto === false) {
      clearInterval(this.autoNext);
    }
  }

  public navigate(action: string) {
    if (typeof this.ACTIONS[action] === 'undefined') {
      return;
    }

    const shift = this.ACTIONS[action];
    this.position = this.position + shift;

    if (this.events) {
      if (this.position < 0) {
        this.position = this.events.length - 1;
      } else if (this.position >= this.events.length) {
        this.position = 0;
      }

      this.item = this.events[this.position];
      this.current = `${(this.position + 1)}/${this.events.length}`;
    }
  }
}
