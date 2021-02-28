import React, { Component } from 'react';
import WholeTile from '../components/wholeTile';
import Tile from '../components/tile';
import Randomizer from '../components/arrayRandomizer';
import BoldText from '../components/boldText';
import MainText from '../components/text';

import '../index.css';

const field = Randomizer(80, 120);

class GameField extends Component {
  constructor() {
    super();
    this.state = {
      BTC: 0,
    };
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e.target);
    // this.setState({ BTC: this.state + 1 });
  }

  render() {
    return (
      <div>
        <div className="settings-item">
          <MainText label="Y&#39;ve mined:" />
          <BoldText label={this.state.BTC} />
        </div>
        <div className="game-field">
          {field.map((item, index) =>
            item === '0' ? (
              <Tile key={index} classprop="game-field-tile" />
            ) : (
              <WholeTile key={index} onClick={(e) => this.handleClick(e)} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default GameField;
