import { Rectangle } from '../class/Rectangle';

describe('Rectangle testing', () => {
  let rectangle: Rectangle;
  beforeEach(() => {
    rectangle = new Rectangle('Rectangle', 5, 2);
  });

  fit('Створення екземпляру класу', () => {
    expect(rectangle).toBeTruthy();
  });

  fit('Розрахунок площі прямокутника зі сторонами 5 і 2', () => {
    rectangle.S();
    let s = rectangle.square;
    let sc = rectangle.a * rectangle.b;
    expect(s).toBe(sc);
  });
});
