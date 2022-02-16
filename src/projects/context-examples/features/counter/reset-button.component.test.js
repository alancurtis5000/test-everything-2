import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import ResetButton from './reset-button.component';
import { CounterContext } from '../../providers/counter.provider';

describe('ResetButton', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    let contextState = {
      count: 0,
      margin: 1,
      reset: jest.fn(),
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <ResetButton />
        </CounterContext.Provider>
      );
    });
    it('should show "Reset" text', () => {
      expect(screen.getByText('Reset')).toBeDefined();
    });

    it('should click "Reset" button', () => {
      fireEvent.click(screen.getByText('Reset'));
      expect(contextState.reset).toHaveBeenCalled();
    });
  });
});
