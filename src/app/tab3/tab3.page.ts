import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  Inputa: string = '1';

  a: number[][] = [];
  n: number = 0;

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  arrayas(n: string) {
    this.n = parseInt(n);
    let i: number = 0,
      j: number = 0;
    this.a = Array(this.n);
    console.log('Array created');
    for (i = 0; i < this.n; i++) {
      this.a[i] = Array(this.n);
      for (j = 0; j < this.n; j++) {
        this.a[i][j] = this.getRandomInt(-100, 100);
      }
    }
  }

  getColor(n: number) {
    return Math.abs(n) === n ? 'green' : 'blue';
  }
}
