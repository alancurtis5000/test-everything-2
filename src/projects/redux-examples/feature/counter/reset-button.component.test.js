// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen } from '../../tests/test.utils';
import ResetButton from './reset-button.component';

describe('ResetButton', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    beforeEach(() => {
      render(<ResetButton />);
    });
    it('should render display "Reset" text', () => {
      expect(screen.getByText('Reset')).toBeDefined();
    });
  });
});
