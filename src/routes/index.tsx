import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Example from '../pages/Example';
import Find from '../pages/Find';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/example" component={Example} />
    <Route path="/find" component={Find} />
  </Switch>
);

export default Routes;
