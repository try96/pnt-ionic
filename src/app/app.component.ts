import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { register } from 'swiper/element/bundle'
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}
}
