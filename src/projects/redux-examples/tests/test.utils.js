// test-utils.js
// this is a custom render for components connected to redux
// also connects to react-router-dom
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import PropTypes from 'prop-types';
import configureAppStore from '../redux/configure-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function render(
  ui,
  {
    preloadedState,
    store = configureAppStore(preloadedState),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
  Wrapper.propTypes = {
    children: PropTypes.node,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
