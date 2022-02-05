import { Route, Routes, NavLink } from 'react-router-dom';
import './App.scss';
import TestProjectA from './projects/test-project-a/test-project-a.app';
import TestProjectB from './projects/test-project-b/test-project-b.app';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="sidebar">
          <div className="grid">
            <Typography variant="h5" component="div">
              Projects
            </Typography>
            <Button variant="contained">
              <NavLink to="/">Test Project A</NavLink>
            </Button>
            <Button variant="contained">
              <NavLink to="/TestProjectB">Test Project B</NavLink>
            </Button>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<TestProjectA />} />
          <Route path="/TestProjectB" element={<TestProjectB />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
