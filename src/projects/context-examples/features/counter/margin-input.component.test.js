// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import MarginInput from './margin-input.component';
import { CounterContext } from '../../providers/counter.provider';

describe('MarginInput', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    let contextState = {
      count: 0,
      margin: 1,
      updateMargin: jest.fn(),
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <MarginInput />
        </CounterContext.Provider>
      );
    });
    it('should show margin value update when input is given', () => {
      const textField = screen.getByTestId('margin');
      expect(textField).toHaveValue(1);
      fireEvent.change(textField, { target: { value: '3' } });
      expect(contextState.updateMargin).toBeCalledTimes(1);
      expect(contextState.updateMargin).toBeCalledWith(3);
    });
    it('should not have an error', () => {
      expect(screen.queryByText('Cannot have margin of 0')).toBeNull();
    });
  });

  describe('Altered State', () => {
    let contextState = {
      margin: 0,
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <MarginInput />
        </CounterContext.Provider>
      );
    });

    it('should show count number text', () => {
      expect(screen.queryByText('Cannot have margin of 0')).toBeDefined();
    });
  });
});
