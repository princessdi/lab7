import { JetEngine } from './JetEngine';

describe('JetEngine', () => {
  let jetEngine: JetEngine;

  beforeEach(() => {
    jetEngine = new JetEngine();
  });

  it('should start the jet engine', () => {
    spyOn(console, 'log');
    jetEngine.start();
    expect(console.log).toHaveBeenCalledWith('Starting Jet Engine');
  });

  it('should stop the jet engine', () => {
    spyOn(console, 'log');
    jetEngine.stop();
    expect(console.log).toHaveBeenCalledWith('Stopping Jet Engine');
  });
});
