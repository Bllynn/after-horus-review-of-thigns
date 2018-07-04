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
//just do this.  THIS IS YOUR ROUTER!!!!!!! HASHROUTER,ROUTE,SWITCH!!!!! ACCEPT IT!!!!!!
//todd made this from his App.js, CHECK INDEX.JS TO FIND ROUTER!!!!!!