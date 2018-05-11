import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxNewstickerAlbeModule } from 'ngx-newsticker-albe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNewstickerAlbeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
