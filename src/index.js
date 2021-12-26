import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DrinkLists from './components/routes/DrinkLists';
import Breakfast from './components/routes/Breakfast';
import Dinner from './components/routes/Dinner';
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="drinklists" element={<DrinkLists />} />
        <Route path="breakfast" element={<Breakfast />} />
        <Route path="dinner" element={<Dinner />} />
        <Route path="" component={<App />} />
      </Route>
    </Routes>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

