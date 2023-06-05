import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  Inputa: string = '0';
  Inputb: string = '1';

  a: number = 0;
  b: number = 0;
  d: number = 0;

  ras(a: string, b: string) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.d = 0;

    try {
      if (this.b <= this.a)
        throw new Error('First number must be bigger than second!');

      for (let i = this.a; i <= this.b; i += 1)
        if (i % 11 === 0 && i % 5 === 2) this.d += 1;
    } catch (err) {
      alert(err);
      console.error(err);
    }
  }
}
