import React, { Component } from 'react';
import PageTitle from '../components/h1';
import MainText from '../components/text';
import SmallText from '../components/smallText';
import AccentText from '../components/accentText';
import Button from '../components/button';
import Tile from '../components/tile';

import GameSettings from '../modules/gameSetting';
import MusicSettings from '../modules/musicSettings';
import InputBlock from '../modules/inputName';
import GameField from '../modules/gameField';

import Coin from '../components/coin';
import Logo from '../components/logo';
import '../index.css';

class Game extends Component {
  render() {
    return (
      <div className="game-wrapper">
        <div className="game-top-panel">
          <PageTitle label="Mine Hard Like the Devil&nbsp;👹" />
          <Button label="Restart" />
        </div>
        {/* <MainText label="UserName, you’ve mined 45BTC and you have 24 sec to go." /> */}
        <GameField />
        {/* <div className="subtitle"> */}
        {/* <AccentText label="Tap as hard, as you can" /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Game;
