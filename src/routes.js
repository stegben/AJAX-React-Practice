import React from 'react';
import { Route, IndexRedirect } from 'react-router';



export default (
  <Route path="/">
    <IndexRedirect to="/users">

    </IndexRedirect>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
