import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import moxios from 'moxios';
import * as fixtures from './__test__/api-call.fixtures';
import APICall from './api-call.component';

describe('Api Call Component', () => {
  beforeEach(() => {
    moxios.install();
    render(<APICall />);
  });

  afterEach(() => {
    moxios.uninstall();
    cleanup;
  });

  it('should get data start and get data success', async () => {
    const response = {
      status: 200,
      response: fixtures.fakeApiCallSuccess,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response);
    });

    expect(screen.queryByTestId('loading')).toBeInTheDocument();

    const { text, author } = response.response.quotes[0];

    fireEvent.click(screen.getByText('Get Quote'));
    await waitFor(() => screen.getByTestId('quote'));
    expect(screen.queryByTestId('loading')).toBeNull();
    expect(screen.getByTestId('author')).toHaveTextContent(author);
    expect(screen.getByTestId('quote')).toHaveTextContent(text);
  });

  it('should get data start and get data failure', async () => {
    const error = {
      status: 404,
      message: 'Network Error',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject(error);
    });

    const alert = error.message;

    expect(screen.queryByTestId('loading')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Get Quote'));
    await waitFor(() => screen.getByTestId('alert'));
    expect(screen.queryByTestId('loading')).toBeNull();
    expect(screen.queryByTestId('author')).toBeNull();
    expect(screen.queryByTestId('quote')).toBeNull();
    expect(screen.getByTestId('alert')).toHaveTextContent(alert);
  });
});
