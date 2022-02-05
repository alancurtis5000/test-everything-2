import { Route, Routes, NavLink } from 'react-router-dom';
import './App.scss';
import TestProjectA from './projects/test-project-a/test-project-a.app';
import TestProjectB from './projects/test-project-b/test-project-b.app';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="grid">
          <NavLink to="/">TestProjectA</NavLink>
          <NavLink to="/TestProjectB">TestProjectB</NavLink>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<TestProjectA />} />
        <Route path="/TestProjectB" element={<TestProjectB />} />
      </Routes>
    </div>
  );
}

export default App;
