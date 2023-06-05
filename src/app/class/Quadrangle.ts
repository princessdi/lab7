export abstract class Quadrangle {
  name!: string;
  a!: number;
  b!: number;
  square!: number;

  constructor() {}

  show() {
    return (
      'Назва фігури: ' +
      this.name +
      ' ' +
      (this.name === 'Square'
        ? 'Сторона: ' + this.a
        : 'a: ' + this.a + ' b: ' + this.b) +
      ' ' +
      'Площа: ' +
      this.square
    );
  }

  abstract S(): any;
}
