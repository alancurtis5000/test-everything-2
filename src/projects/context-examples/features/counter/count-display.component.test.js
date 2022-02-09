// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import CountDisplay from './count-display.component';
import { CounterContext } from '../../providers/counter.provider';

describe('CountDisplay', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    let contextState = {
      count: 0,
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <CountDisplay />
        </CounterContext.Provider>
      );
    });
    it('should show "Count:" text', () => {
      expect(screen.getByText('Count:')).toBeDefined();
    });
    it('should show count number text', () => {
      expect(screen.getByTestId('count').textContent).toBe('0');
    });
  });

  describe('Altered State', () => {
    let contextState = {
      count: 3,
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <CountDisplay />
        </CounterContext.Provider>
      );
    });

    it('should show count number text', () => {
      expect(screen.getByTestId('count').textContent).toBe('3');
    });
  });
});
