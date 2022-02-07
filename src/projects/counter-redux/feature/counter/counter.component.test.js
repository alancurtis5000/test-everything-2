// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup, fireEvent, screen } from '../../tests/test.utils';
// this is import from testing-library base.
import Counter from './counter.component';

// TODO: go through this test and convert it to use screen and one render. reorginize.

describe('Counter', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    beforeEach(() => {
      render(<Counter />);
    });

    it('should render with ititialState from Redux store', () => {
      const count = screen.getByTestId('count').textContent;
      expect(count).toBe('0');
    });

    it('should dispatch action increment on button click find by testId', () => {
      fireEvent.click(screen.getByTestId('add'));
      const count = screen.getByTestId('count').textContent;
      expect(count).toBe('1');
    });
    it('should dispatch action increment on button click find by text', () => {
      fireEvent.click(screen.getByText('Add'));
      const count = screen.getByTestId('count').textContent;
      expect(count).toBe('1');
    });
    it('should dispatch an action decrement on button click', () => {
      fireEvent.click(screen.getByTestId('minus'));
      const count = screen.getByTestId('count').textContent;
      expect(count).toBe('-1');
    });
    it('should dispatch an action reset on button click', () => {
      fireEvent.click(screen.getByTestId('reset'));
      const count = screen.getByTestId('count').textContent;
      expect(count).toBe('0');
      const margin = screen.getByTestId('margin').value;
      expect(margin).toBe('1');
    });
    it('should change input margin', () => {
      const input = screen.getByTestId('margin');
      fireEvent.change(input, { target: { value: 4 } });
      const result = input.value;
      expect(result).toBe('4');
    });

    it('should not allow letters to be inputted', () => {
      const input = screen.getByTestId('margin');
      expect(input.value).toBe('1'); // default value
      fireEvent.change(input, { target: { value: 'Good Day' } });
      expect(input.value).toBe('0'); // value afte change after
    });

    it('should change margin and update count on button push', () => {
      // intial state before
      const input = screen.getByTestId('margin');
      expect(input.value).toBe('1');
      const count = screen.getByTestId('count').textContent;
      expect(count).toBe('0');
      // changes
      fireEvent.change(input, { target: { value: 5 } });
      expect(input.value).toBe('5');
      fireEvent.click(screen.getByTestId('add'));
      // results
      const finalCount = screen.getByTestId('count').textContent;
      expect(finalCount).toBe('5');
    });

    it('should handle multiple changes, update margin add multiple times and minus multiple times , then reset', () => {
      let count = screen.getByTestId('count').textContent;
      const marginInput = screen.getByTestId('margin');

      // intial state before
      expect(count).toBe('0'); // default value
      expect(marginInput.value).toBe('1'); // default value

      // changes
      fireEvent.change(marginInput, { target: { value: 5 } }); // change margin to 5
      expect(marginInput.value).toBe('5');

      fireEvent.click(screen.getByTestId('add')); // add 5 two times to count
      fireEvent.click(screen.getByTestId('add'));
      count = screen.getByTestId('count').textContent;
      expect(count).toBe('10');

      fireEvent.change(marginInput, { target: { value: 2 } }); // change margin to 2
      expect(marginInput.value).toBe('2');

      fireEvent.click(screen.getByTestId('minus')); // minus 2 three times from count
      fireEvent.click(screen.getByTestId('minus'));
      fireEvent.click(screen.getByTestId('minus'));
      count = screen.getByTestId('count').textContent;
      expect(count).toBe('4');

      fireEvent.click(screen.getByTestId('reset')); // then reset everything back to default
      count = screen.getByTestId('count').textContent;
      expect(count).toBe('0');
      expect(marginInput.value).toBe('1');
    });
  });

  describe('Altered State', () => {
    it('should render with preloadedState / override intialState of redux store from Redux store', () => {
      const preloadedState = { counter: { count: 10, margin: 5 } };
      const { getByTestId } = render(<Counter />, {
        preloadedState,
      });
      let count = screen.getByTestId('count').textContent;
      expect(count).toBe('10');
      fireEvent.click(getByTestId('add'));
      count = getByTestId('count').textContent;
      expect(count).toBe('15');
    });
  });
});
