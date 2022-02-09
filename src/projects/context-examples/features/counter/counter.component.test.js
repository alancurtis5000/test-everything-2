// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Counter from './counter.component';

describe('Counter', () => {
  afterEach(cleanup);
  // is there a way to override default state like preloaded state in redux?
  // don't need context provider because this is the comp that is wrapped in it.
  describe('Default State', () => {
    beforeEach(() => {
      render(<Counter />);
    });
    it('should show "Count:" text', () => {
      expect(screen.getByText('Count:')).toBeDefined();
    });
    it('should show count number text', () => {
      expect(screen.getByTestId('count').textContent).toBe('0');
    });

    it('should click "Add" button', () => {
      expect(screen.getByTestId('count').textContent).toBe('0');
      fireEvent.click(screen.getByText('Add'));
      expect(screen.getByTestId('count').textContent).toBe('1');
    });
    it('should click "Minus" button', () => {
      expect(screen.getByTestId('count').textContent).toBe('0');
      fireEvent.click(screen.getByText('Minus'));
      expect(screen.getByTestId('count').textContent).toBe('-1');
    });
    it('should "Minus" "Minus" then reset', () => {
      expect(screen.getByTestId('count').textContent).toBe('0');
      fireEvent.click(screen.getByText('Minus'));
      fireEvent.click(screen.getByText('Minus'));
      expect(screen.getByTestId('count').textContent).toBe('-2');
      fireEvent.click(screen.getByText('Reset'));
      expect(screen.getByTestId('count').textContent).toBe('0');
    });
    it('should Add , Minus, Update Margin and Reset', () => {
      const marginInput = screen.getByTestId('margin');
      const minusButton = screen.getByText('Minus');
      const addButton = screen.getByText('Add');
      const resetButton = screen.getByText('Reset');
      const countDisplay = screen.getByTestId('count');

      expect(countDisplay.textContent).toBe('0');
      expect(marginInput).toHaveValue(1);
      expect(screen.queryByText('Cannot have margin of 0')).toBeNull();

      fireEvent.click(minusButton);
      fireEvent.click(minusButton);
      expect(countDisplay.textContent).toBe('-2');
      fireEvent.change(marginInput, { target: { value: '5' } });
      expect(marginInput).toHaveValue(5);
      fireEvent.click(addButton);
      fireEvent.click(addButton);
      expect(countDisplay.textContent).toBe('8');
      fireEvent.click(resetButton);
      expect(screen.getByTestId('count').textContent).toBe('0');
      expect(marginInput).toHaveValue(1);
      fireEvent.change(marginInput, { target: { value: '0' } });
      expect(addButton).toBeDisabled();
      expect(minusButton).toBeDisabled();
      expect(screen.queryByText('Cannot have margin of 0')).toBeDefined();
    });
  });
});
