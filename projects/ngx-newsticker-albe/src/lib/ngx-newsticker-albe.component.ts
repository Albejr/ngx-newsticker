import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  Renderer2,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-newsticker',
  templateUrl: './ngx-newsticker-albe.component.html',
  styleUrls: ['./ngx-newsticker-albe.component.scss']
})
export class NgxNewstickerAlbeComponent implements OnInit, AfterViewInit {
  // Highlighted text.
  @Input() title = '';
  // List of messages to be displayed.
  @Input() events: Array<string> = [];
  // Sets the auto navigate to next event.
  @Input() auto = true;
  // Sets the current count visibility.
  @Input() showCounter = true;
  // Change the default blue color.
  @Input() defaultColor: string;
  // Change the back ground color of content.
  @Input() backColor: string;

  @ViewChild('nt') private ntRef: ElementRef;
  @ViewChild('ntCounter') private ntCounterRef: ElementRef;
  @ViewChild('ntTitle') private ntTitleRef: ElementRef;
  @ViewChild('nDart') private nDart: ElementRef;
  @ViewChildren('ntNavi') ntNaviRef: QueryList<ElementRef>;

  private ACTIONS = {
    'NEXT': 1,
    'PREV': -1
  };

  autoNext: any;
  item: string;
  current: string;
  position = -1;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
    this.autoNext = setInterval(() => this.navigate('NEXT'), 3000);
  }

  ngOnInit() {

    this.navigate('NEXT');

    if (this.auto === false) {
      clearInterval(this.autoNext);
    }
  }

  ngAfterViewInit(): void {
    this.defaultColor = this.defaultColor || '#1976D2';

    // this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    this.renderer.setStyle(this.ntRef.nativeElement, 'background-color', this.backColor || '#FFFFFF');
    this.renderer.setStyle(this.ntRef.nativeElement, 'border-color', this.defaultColor);

    if (this.ntCounterRef) {
      this.renderer.setStyle(this.ntCounterRef.nativeElement, 'background-color', this.defaultColor);
    }

    if (this.ntTitleRef) {
      this.renderer.setStyle(this.ntTitleRef.nativeElement, 'background-color', this.defaultColor);
      this.renderer.setStyle(this.nDart.nativeElement, 'border-left-color', this.defaultColor);
    }

    this.ntNaviRef.forEach(item => {
      this.renderer.setStyle(item.nativeElement, 'border-color', this.defaultColor);
    });

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
