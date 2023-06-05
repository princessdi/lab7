import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  Inputa: string = '0';
  Inputb: string = '0';
  Inputc: string = '0';
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  ras(a: string, b: string, c: string) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.c = parseFloat(c);

    const sum = this.a + this.b + this.c;

    this.d = this.a > 5 || this.b > 5 || this.c > 5 ? Math.pow(sum, 3) : sum;
  }
}
