import React, { createContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

export const APICallContext = createContext({
  data: {},
  isLoaded: false,
  error: '',
  // actions
  change: () => {},
});

const APICallContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [goGetData, setGoGetData] = useState(false);
  const change = () => setGoGetData(!goGetData);
  const [error, setError] = useState('');

  const getDataApiCall = () => {
    axios
      .get('https://goquotes-api.herokuapp.com/api/v1/random?count=1zzzzzz')
      .then((response) => {
        setData(response.data.quotes[0]);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoaded(true);
      });
  };

  // need to do async because of state updates are async
  useEffect(() => {
    setIsLoaded(false);
    const fetch = async () => {
      await getDataApiCall();
    };
    fetch();
  }, [goGetData]);

  return (
    <APICallContext.Provider
      // they say not to pass fetch as value, bad for rerenders.
      value={{
        data,
        isLoaded,
        change,
        error,
      }}
    >
      {children}
    </APICallContext.Provider>
  );
};

APICallContextProvider.propTypes = {
  children: propTypes.node,
};
export default APICallContextProvider;
