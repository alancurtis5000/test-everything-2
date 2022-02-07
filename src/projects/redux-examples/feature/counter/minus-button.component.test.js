// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen } from '../../tests/test.utils';
import MinusButton from './minus-button.component';

describe('MinusButton', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    beforeEach(() => {
      render(<MinusButton />);
    });
    it('should render display "Minus" text', () => {
      expect(screen.getByText('Minus')).toBeDefined();
    });
  });

  describe('Altered State', () => {
    const preloadedState = { counter: { count: 0, margin: 0 } };
    beforeEach(() => {
      render(<MinusButton />, { preloadedState });
    });
    it('should show disabled "Minus" Button', () => {
      expect(screen.getByTestId('minus')).toBeDisabled();
    });
  });
});
