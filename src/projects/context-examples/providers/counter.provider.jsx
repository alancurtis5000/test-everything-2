import React, { createContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { incrementCount, decrementCount } from './counter.utils';

// can I and should I right test for this?
/* istanbul ignore next */
export const CounterContext = createContext({
  count: 0,
  margin: 1,
  // actions
  increment: () => {},
  decrement: () => {},
  updateMargin: () => {},
  reset: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState(1);
  // actions
  const increment = () => setCount(incrementCount(count, margin));
  const decrement = () => setCount(decrementCount(count, margin));
  const updateMargin = (updateMargin) => setMargin(updateMargin);
  const reset = () => {
    setCount(0);
    setMargin(1);
  };

  // if count changes do something
  // useEffect(() => {
  //   console.log({ count });
  // }, [count]);

  return (
    <CounterContext.Provider
      value={{
        count,
        margin,
        increment,
        decrement,
        updateMargin,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: propTypes.node,
};
export default CounterContextProvider;
