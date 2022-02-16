import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import MinusButton from './minus-button.component';
import { CounterContext } from '../../providers/counter.provider';

describe('MinusButton', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    let contextState = {
      count: 0,
      margin: 1,
      decrement: jest.fn(),
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <MinusButton />
        </CounterContext.Provider>
      );
    });
    it('should show "Minus" text', () => {
      expect(screen.getByText('Minus')).toBeDefined();
    });

    it('should click "Minus" button', () => {
      fireEvent.click(screen.getByText('Minus'));
      expect(contextState.decrement).toHaveBeenCalled();
    });
  });

  describe('Altered State', () => {
    let contextState = {
      count: 0,
      margin: 0,
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <MinusButton />
        </CounterContext.Provider>
      );
    });
    it('should show disabled "Minus" Button', () => {
      expect(screen.getByTestId('minus')).toBeDisabled();
    });
  });
});
