import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Counter from './features/counter/counter.component';

const theme = createTheme({});

const ContextExamplesApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="ContextExamplesApp">
        <Typography variant="h5" component="div" sx={{ marginLeft: '20px' }}>
          Context Examples
        </Typography>
        <Counter />
      </div>
    </ThemeProvider>
  );
};

export default ContextExamplesApp;
