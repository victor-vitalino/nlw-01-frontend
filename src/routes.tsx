import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

// pages
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Success from './pages/Success';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
      <BrowserRouter>
      <Route component={ Home } path="/" exact />
      <Route component={ CreatePoint }  path="/create-point" />
      <Route component={ Success }  path="/success" />
      
      </BrowserRouter>
  );
}

export default Routes;