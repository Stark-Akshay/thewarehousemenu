import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DrinkLists from './components/routes/DrinkLists';
import Breakfast from './components/routes/Breakfast';
import Dinner from './components/routes/Dinner';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="drinklists" element={<DrinkLists />} />
        <Route path="breakfast" element={<Breakfast />} />
        <Route path="dinner" element={<Dinner />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

