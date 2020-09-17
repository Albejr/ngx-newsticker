import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxNewstickerAlbeComponent } from './ngx-newsticker-albe.component';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxNewstickerAlbeComponent, SafeHtmlPipe],
  exports: [NgxNewstickerAlbeComponent]
})
export class NgxNewstickerAlbeModule { }
