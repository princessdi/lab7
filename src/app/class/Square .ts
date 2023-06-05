import { Quadrangle } from './Quadrangle';

export class Square extends Quadrangle {
  constructor(override name: string, override a: number) {
    super();
  }

  S() {
    this.square = this.a ** 2;
  }
}
