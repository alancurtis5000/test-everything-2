// We're using our own custom render function for redux conneceted components and not RTL's render
import { render, cleanup, screen } from '@testing-library/react';
import Content from './content.component';
import * as fixtures from './__test__/api-call.fixtures';

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
        apiCall: { isLoaded: false, data: {}, error: '' },
      };
      render(<Content />, { preloadedState });
      expect(screen.getByText('...Loading...')).toBeDefined();
    });
    it('should display error', () => {
      const preloadedState = {
        apiCall: { isLoaded: true, data: {}, error: 'This is an Error' },
      };
      render(<Content />, { preloadedState });
      expect(screen.getByText('This is an Error')).toBeDefined();
    });
    it('should display Content', () => {
      const { author, text } = fixtures.fakeApiCallSuccess.quotes[0];
      const preloadedState = {
        apiCall: {
          isLoaded: true,
          data: { author, text },
          error: '',
        },
      };
      render(<Content />, { preloadedState });
      expect(screen.getByText(author)).toBeDefined();
      expect(screen.getByText(text)).toBeDefined();
    });
  });
});
