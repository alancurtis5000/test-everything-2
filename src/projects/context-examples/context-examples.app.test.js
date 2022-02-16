import { render, cleanup, screen } from '@testing-library/react';

import ContextExamplesApp from './context-examples.app';

describe('Api Call Component', () => {
  beforeEach(() => {
    render(<ContextExamplesApp />);
  });

  afterEach(() => {
    cleanup;
  });

  it('should render', () => {
    expect(screen.getByText('Context Examples')).toBeInTheDocument();
  });
});
