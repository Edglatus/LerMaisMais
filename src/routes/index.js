import React from 'react';
import Route from './Route';
import Home from './pages/Home';


function routes() {
  return <Route  path="/" exact component={Home} />
}

export default routes;