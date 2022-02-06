// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen } from '../../tests/test.utils';
import CountDisplay from './count-display.component';

describe('CountDisplay', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    beforeEach(() => {
      render(<CountDisplay />);
    });
    it('should show "Count:" text', () => {
      expect(screen.getByText('Count:')).toBeDefined();
    });
    it('should show count number text', () => {
      expect(screen.getByTestId('count').textContent).toBe('0');
    });
  });
});
