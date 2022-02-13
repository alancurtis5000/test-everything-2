import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.scss';
import TestProjectA from './projects/test-project-a/test-project-a.app';
import ReduxExamplesApp from './projects/redux-examples/redux-examples.app';
import ContextExamplesApp from './projects/context-examples/context-examples.app';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

// anytime you want to add a new project add it to the project list.
const projects = [
  { name: 'TestProjectA', element: <TestProjectA /> },
  { name: 'ReduxExamplesApp', element: <ReduxExamplesApp /> },
  { name: 'ContextExamplesApp', element: <ContextExamplesApp /> },
];

let navButtons = [];
let routes = [];

projects.forEach((project) => {
  const { name, element } = project;
  let button = (
    <NavLink to={`/${name}`} key={name}>
      <Button variant="contained" fullWidth>
        {name}
      </Button>
    </NavLink>
  );
  navButtons.push(button);

  let route = <Route path={`/${name}`} element={element} key={name} />;
  routes.push(route);
});

const baseRoute = (
  <Route path={`/`} element={<ReduxExamplesApp />} key={'ReduxExamplesApp'} />
);
routes.push(baseRoute);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="sidebar">
          <div className="grid">
            <Typography variant="h5" component="div">
              Projects
            </Typography>
            {navButtons}
          </div>
        </div>
        <Routes>{routes}</Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
