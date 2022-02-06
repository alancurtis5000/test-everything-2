import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Counter from './feature/counter/counter.component';

import { Provider } from 'react-redux';
import configureStore from './redux/configure-store';

const store = configureStore();
const theme = createTheme({});

const CounterReduxApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="CounterReduxApp">
          <Typography variant="h5" component="div">
            Counter Redux
          </Typography>
          <Counter />
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default CounterReduxApp;
