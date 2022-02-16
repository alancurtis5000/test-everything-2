// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen } from '@testing-library/react';
import Content from './content.component';
import * as fixtures from './__test__/api-call.fixtures';
import { APICallContext } from '../../providers/api-call.provider';

const wrappedInProvider = (preloadedState) => (
  <APICallContext.Provider value={preloadedState}>
    <Content />
  </APICallContext.Provider>
);

describe('Content', () => {
  afterEach(cleanup);

  describe('Default State', () => {
    beforeEach(() => {
      render(<Content />);
    });
    it('should show "Content" text', () => {
      expect(screen.getByText('Quote:')).toBeDefined();
    });
  });

  describe('Altered State', () => {
    it('should display loading screen', () => {
      const preloadedState = {
        isLoaded: false,
        data: {},
        error: '',
      };
      render(wrappedInProvider(preloadedState));
      expect(screen.getByText('...Loading...')).toBeDefined();
    });
    it('should display error', () => {
      const preloadedState = {
        isLoaded: true,
        data: {},
        error: 'This is an Error',
      };
      render(wrappedInProvider(preloadedState));
      expect(screen.getByText('This is an Error')).toBeDefined();
    });
    it('should display Content', () => {
      const { author, text } = fixtures.fakeApiCallSuccess.quotes[0];
      const preloadedState = {
        isLoaded: true,
        data: { author, text },
        error: '',
      };
      render(wrappedInProvider(preloadedState));
      expect(screen.getByTestId('author')).toHaveTextContent(author);
      expect(screen.getByTestId('quote')).toHaveTextContent(text);
    });
  });
});
