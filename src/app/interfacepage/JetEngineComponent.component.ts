import { Component } from '@angular/core';
import { JetEngine } from './class/JetEngine';

@Component({
  selector: 'app-jet-engine',
  template: `
    <div>
      <h2>Jet Engine</h2>
      <button (click)="startEngine()">Start Engine</button>
      <button (click)="stopEngine()">Stop Engine</button>
    </div>
  `,
})
export class JetEngineComponent {
  jetEngine: JetEngine;

  constructor() {
    this.jetEngine = new JetEngine();
  }

  startEngine(): void {
    this.jetEngine.start();
  }

  stopEngine(): void {
    this.jetEngine.stop();
  }
}
