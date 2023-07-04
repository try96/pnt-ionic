import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Home {
  currentTime!: string;

  changeTheme() {
    document.body.classList.toggle('dark');
  }
  constructor() {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      this.currentTime = now.toLocaleTimeString('pt-BR', options);
    }
    updateTime();
    setInterval(() => {
      updateTime();
    }, 1000);
  }
}
