import * as utils from './counter.utils';

describe('CounterUtils', () => {
  it('should add current count and margin', () => {
    const count = 10;
    const margin = 5;
    const result = utils.incrementCount(count, margin);
    expect(result).toEqual({ count: 15 });
  });

  it('should subtact margin from current count', () => {
    const count = 11;
    const margin = 3;
    const result = utils.decrementCount(count, margin);
    expect(result).toEqual({ count: 8 });
  });
});
