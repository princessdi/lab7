import { Component } from '@angular/core';
import { DieselEngine } from './class/DieselEngine';

@Component({
  selector: 'app-diesel-engine',
  template: `
    <div>
      <h2>Diesel Engine</h2>
      <p>Fuel Type: {{ dieselEngine.fuelType }}</p>
      <button (click)="startEngine()">Start Engine</button>
      <button (click)="stopEngine()">Stop Engine</button>
    </div>
  `,
})
export class DieselEngineComponent {
  dieselEngine: DieselEngine;

  constructor() {
    this.dieselEngine = new DieselEngine();
  }

  startEngine(): void {
    this.dieselEngine.start();
  }

  stopEngine(): void {
    this.dieselEngine.stop();
  }
}
