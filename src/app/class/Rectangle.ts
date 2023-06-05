import { Quadrangle } from './Quadrangle';

export class Rectangle extends Quadrangle {
  constructor(override name: string, override a: number, override b: number) {
    super();
  }

  S() {
    this.square = this.a * this.b;
  }
}
