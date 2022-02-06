// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen, fireEvent } from '../../tests/test.utils';
import MarginInput from './margin-input.component';

describe('MarginInput', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    beforeEach(() => {
      render(<MarginInput />);
    });
    it('should show margin value at 1', () => {
      expect(screen.getByTestId('margin')).toHaveValue(1);
    });
    it('should show margin value update when input is given', () => {
      const textField = screen.getByTestId('margin');
      expect(textField).toHaveValue(1);
      fireEvent.change(textField, { target: { value: '3' } });
      expect(textField).toHaveValue(3);
    });
  });
});
