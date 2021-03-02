import React, { Component } from 'react';
import MainTitle from '../components/pageTitle';
import Button from '../components/button';
import GameField from '../components/gameField';

import '../index.css';

class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.countdown = setInterval(
      () => (window.location.pathname = '/congrats'),
      30000
    );
  }

  render() {
    return (
      <div className="game-wrapper">
        <div className="game-top-panel">
          <MainTitle label="Mine Hard Like the Devil&nbsp;👹" />
          <Button label="Restart" classprop="button" />
        </div>

        <GameField />
      </div>
    );
  }
}

export default Game;
