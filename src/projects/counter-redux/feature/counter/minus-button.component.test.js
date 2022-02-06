// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup } from '../../../tests/test.utils';
import ExampleCounterMinus from './example-counter-minus.component';

describe('ExampleCounterMinus', () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it('should render', () => {
    const component = render(<ExampleCounterMinus />);
    expect(component).toBeDefined();
  });

  it('should be disabled if margin is 0', () => {
    const preloadedState = { exampleCounter: { count: 0, margin: 0 } };
    const { getByTestId } = render(<ExampleCounterMinus />, { preloadedState });
    const button = getByTestId('minus');
    expect(button).toBeDisabled();
  });
});
