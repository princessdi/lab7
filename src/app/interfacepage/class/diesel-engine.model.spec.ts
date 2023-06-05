import { DieselEngine } from './DieselEngine';

describe('DieselEngine', () => {
  let dieselEngine: DieselEngine;

  beforeEach(() => {
    dieselEngine = new DieselEngine();
  });

  it('should have the fuel type set to "Diesel"', () => {
    expect(dieselEngine.fuelType).toBe('Diesel');
  });

  it('should start the diesel engine', () => {
    spyOn(console, 'log');
    dieselEngine.start();
    expect(console.log).toHaveBeenCalledWith('Starting Diesel Engine');
  });

  it('should stop the diesel engine', () => {
    spyOn(console, 'log');
    dieselEngine.stop();
    expect(console.log).toHaveBeenCalledWith('Stopping Diesel Engine');
  });
});
