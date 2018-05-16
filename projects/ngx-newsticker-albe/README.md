# Albe News Ticker <sup>1.1.1</sup>

![image](https://user-images.githubusercontent.com/24717256/39906857-a16f2c46-54bb-11e8-88b6-4c35f4d27805.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1

## Installation
```html
$ npm install ngx-newsticker-albe --save
```

## Usage
### Import the module
```typescript
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';

@NgModule({
    imports: [ NgxNewstickerAlbeModule ],
    ...
})
export class AppModule {}
```

### Template
```html
<ngx-newsticker title="Live News" [events]="eventList"></ngx-newsticker>
```

### Component
```typescript
export class AppComponent implements OnInit {
  eventList = new Array<string>();

  ngOnInit() {
    this.eventList.push(`Lorem ipsum dolor sit amet, <s>consectetur</s> adipiscing elit. Phasellus sit amet nibh dolor.`);
    this.eventList.push(`<span>${new Date().toLocaleString()}</span> - Sed et ligula non risus ullamcorper rhoncus quis vel ante.`);
    this.eventList.push(`<i>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<i>`);
    this.eventList.push(`Fusce a odio interdum, <a href="#">I'm Anchor</a> rutrum lorem quis, gravida tellus.`);
  }
}
```

### Options

| Name           |          | Type          | Default value | Description                              |
| -------------- | -------- | ------------- | ------------- | ---------------------------------------- |
| [events]       | required | Array<String> | [ ]           | List of messages to be displayed.        |
| [title]        | optional | String        | ''            | Highlighted text.                        |
| [auto]         | optional | Boolean       | true          | Sets the auto navigate to next event.    |
| [showCounter]  | optional | Boolean       | true          | Sets the current count visibility.       |
| [defaultColor] | optional | String        | '#1976D2'     | Change the default blue color.           |
| [backColor]    | optional | String        | '#FFFFFF'     | Change the back ground color of content. |

## Styling guide

There are several classes that help you to create your custom styles
`app.component.css`
```css
:host ::ng-deep .newsticker>.nt-content>label {
  color: #D32F2F;
}
```

## Demo App
Follow these instructions to run the demo:

1. Clone the repository to your local machine
2. From the project folder, run `npm i` to install all required dependencies
3. Run `ng b ngx-newsticker-albe` to build in **dist** folder.
4. Run `ng s` to serve the project from a live-updating server.
5. Go to `localhost:4200` to see the demo site