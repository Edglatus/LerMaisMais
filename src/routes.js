import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import Text from './pages/Text';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/livro/:id" component={Text} />
      </Switch>
    </BrowserRouter>
  ); 
  
}

export default Routes;