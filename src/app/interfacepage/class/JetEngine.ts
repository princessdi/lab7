import { Engine } from './Engine';

export class JetEngine extends Engine {
  start(): void {
    // Логіка запуску реактивного двигуна
    console.log('Starting Jet Engine');
  }

  stop(): void {
    // Логіка зупинки реактивного двигуна
    console.log('Stopping Jet Engine');
  }
}
