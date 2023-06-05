import { Square } from '../class/Square ';

describe('Square testing', () => {
  let square: Square;
  beforeEach(() => {
    square = new Square('Square', 5);
  });

  fit('Створення екземпляру класу', () => {
    expect(square).toBeTruthy();
  });

  fit('Розрахунок площі квадрата зі стороною 5', () => {
    square.S();
    let s = square.square;
    let sc = square.a ** 2;
    expect(s).toBe(sc);
  });
});
