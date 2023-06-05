import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();

  constructor(@Optional() private logservice: LogService) {}

  getRecursion(x: number, temp: number, n: number, sum: number) {
    const limit = 10;
    const term = (-1) ** n * ((x ** 2 * n + 1) / (2 * n + 1));

    sum += term;
    n += 1;

    if (n < limit) {
      this.getRecursion(x, temp, n, sum);
    } else {
      this.yy = sum;
    }
  }

  getTab(xn: number, xk: number, h: number) {
    const pi = xk;
    let x = xn,
      y = 0.0;

    while (x <= pi) {
      this.getRecursion(x, 0, 0, y);
      this.xy.set(x, this.yy);
      if (this.logservice) {
        this.logservice.write(
          'x= ' + x.toFixed(2) + ' y= ' + this.yy.toFixed(2)
        );
      }
      x = x + h;
    }
    return this.xy;
  }
}
