# Albe News Ticker <sup>1.0.1</sup>

![image](https://user-images.githubusercontent.com/24717256/39906857-a16f2c46-54bb-11e8-88b6-4c35f4d27805.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Installation
```html
$ npm install ngx-newsticker-albe --save
```

## Integration
```typescript
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';

@NgModule({
    imports: [ NgxNewstickerAlbeModule ],
    ...
})
export class AppModule {}
```

## How to use
```html
<ngx-newsticker title="Live News" [events]="eventsData"></ngx-newsticker>
```

## Format
```typescript
export class AppComponent implements OnInit {
  eventsData = new Array<string>();

  ngOnInit() {
    this.eventsData.push(`Lorem ipsum dolor sit amet, <s>consectetur</s> adipiscing elit. Phasellus sit amet nibh dolor.`);
    this.eventsData.push(`<span>${new Date().toLocaleString()}</span> - Sed et ligula non risus ullamcorper rhoncus quis vel ante.`);
    this.eventsData.push(`<i>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<i>`);
    this.eventsData.push(`Fusce a odio interdum, <a href="#">I'm Anchor</a> rutrum lorem quis, gravida tellus.`);
  }
}
```
