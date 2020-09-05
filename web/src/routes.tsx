import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Room from './pages/Room';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:roomId" exact component={Room} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;