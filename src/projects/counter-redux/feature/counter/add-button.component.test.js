// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup } from '../../../tests/test.utils';
import ExampleCounterAdd from './add-button.component';

describe('ExampleCounterAdd', () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it('should render', () => {
    const component = render(<ExampleCounterAdd />);
    expect(component).toBeDefined();
  });

  it('should be disabled if margin is 0', () => {
    const preloadedState = { exampleCounter: { count: 0, margin: 0 } };
    const { getByTestId } = render(<ExampleCounterAdd />, { preloadedState });
    const button = getByTestId('add');
    expect(button).toBeDisabled();
  });
});
