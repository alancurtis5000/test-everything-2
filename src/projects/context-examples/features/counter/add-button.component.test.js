import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import AddButton from './add-button.component';
import { CounterContext } from '../../providers/counter.provider';

describe('AddButton', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    let contextState = {
      count: 0,
      margin: 1,
      increment: jest.fn(),
    };
    beforeEach(() => {
      render(
        <CounterContext.Provider value={contextState}>
          <AddButton />
        </CounterContext.Provider>
      );
    });
    it('should show "Add" text', () => {
      expect(screen.getByText('Add')).toBeDefined();
    });

    it('should click "Add" button', () => {
      fireEvent.click(screen.getByText('Add'));
      expect(contextState.increment).toHaveBeenCalled();
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
          <AddButton />
        </CounterContext.Provider>
      );
    });
    it('should show disabled "Add" Button', () => {
      expect(screen.getByTestId('add')).toBeDisabled();
    });
  });
});
