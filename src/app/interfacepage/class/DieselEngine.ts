import { InternalCombustionEngine } from './InternalCombustionEngine';

export class DieselEngine extends InternalCombustionEngine {
  fuelType = 'Diesel';

  start(): void {
    // Логіка запуску дизельного двигуна
    console.log('Starting Diesel Engine');
  }

  stop(): void {
    // Логіка зупинки дизельного двигуна
    console.log('Stopping Diesel Engine');
  }
}
