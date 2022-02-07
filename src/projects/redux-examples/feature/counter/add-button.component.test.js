// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen } from '../../tests/test.utils';
import AddButton from './add-button.component';

describe('AddButton', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    beforeEach(() => {
      render(<AddButton />);
    });
    it('should show "Add" text', () => {
      expect(screen.getByText('Add')).toBeDefined();
    });
  });

  describe('Altered State', () => {
    const preloadedState = { counter: { count: 0, margin: 0 } };
    beforeEach(() => {
      render(<AddButton />, { preloadedState });
    });
    it('should show disabled "Add" Button', () => {
      expect(screen.getByTestId('add')).toBeDisabled();
    });
  });
});
