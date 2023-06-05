import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) {}

  getTab(xn: number, xk: number, h: number): Map<number, number> {
    const pi = xk;
    const limit = 10;

    for (let x = xn; x <= pi; x += h) {
      let i = 1;
      let sum = 0;
      while (i <= limit) {
        const term = (-1) ** xn * ((x ** 2 * xn + 1) / (2 * xn + 1));
        sum += term;
        i += 1;
      }
      this.xy.set(x, sum);
      if (this.logService) {
        this.logService.write('x= ' + x.toFixed(2) + 'y= ' + sum.toFixed(2));
      }
    }
    return this.xy;
  }
}
