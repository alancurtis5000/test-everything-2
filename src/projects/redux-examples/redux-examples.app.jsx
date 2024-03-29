import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Counter from './feature/counter/counter.component';
import APICall from './feature/api-call/api-call.component';

import { Provider } from 'react-redux';
import configureStore from './redux/configure-store';

const store = configureStore();
const theme = createTheme({});

const ReduxExamplesApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="ReduxExamplesApp">
          <Typography variant="h5" component="div" sx={{ marginLeft: '20px' }}>
            Redux Examples
          </Typography>
          <Counter />
          <APICall />
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default ReduxExamplesApp;
