import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Single from './components/Single';

const router = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/single/:id" component={Single}/>
    </Switch>
  </HashRouter>
)

export default router;