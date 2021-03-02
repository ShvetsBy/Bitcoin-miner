import React from 'react';
import Main from '../src/pages/main';
import Congrats from '../src/pages/Congrats';
import Stats from '../src/pages/stats';
import Game from '../src/pages/game';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/game">
          <Game />
        </Route>
        <Route path="/congrats">
          <Congrats />
        </Route>

        <Route path="/stats">
          <Stats />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
