import React, { Component } from 'react';
import WholeTile from '../components/wholeTile';
import Tile from '../components/Tile';
import Randomize from '../components/arrayRandomizer';
import Text from '../components/mainText';

import '../index.css';

const field = Randomize(80, 120);

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
          <Text label="Y&#39;ve mined:" classprop="main-text" />
          <Text label={this.state.BTC} classprop="bold-text" />
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
