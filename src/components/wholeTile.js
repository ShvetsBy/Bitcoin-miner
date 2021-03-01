import React, { Component } from 'react';
import Tile from '../components/Tile';
import Coin from '../components/coin';

import '../index.css';

class WholeTile extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  handler = (e) => {
    this.setState({ isClicked: true });
    this.props.handler();
  };

  render() {
    if (this.state.isClicked) {
      return (
        <div className="game-field-tile-clicked">
          <Coin classprop="game-field-coin" />
        </div>
      );
    }
    return (
      <div
        className="whole-tile"
        onClick={this.handler}
        // onClick={this.props.handler}
      >
        <div className="game-field-tile">
          {/* <Coin classprop="game-field-coin" /> */}
        </div>
      </div>
    );
  }
}

export default WholeTile;
