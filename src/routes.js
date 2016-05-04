import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Home from './Components/Home'
import AllUsers from './Components/AllUsers';
import User from './Components/User';
import NotFound from './Components/NotFound';


export default (
  <Route path="/" component={Home}>
    <IndexRedirect to="/users" />
    <Route path="users" component={AllUsers} />
    <Route path="users/:username" component={User} />
    <Route path="*" component={NotFound} />
  </Route>
);
