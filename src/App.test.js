import { render, screen } from './tests/test.utils';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const sidebarTitle = screen.getByText(/Projects/i);
  expect(sidebarTitle).toBeInTheDocument();
});
