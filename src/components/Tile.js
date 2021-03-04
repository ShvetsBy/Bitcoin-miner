import React, { Component } from 'react';
import '../index.css';
class Tile extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  handler = (e) => {
    this.setState({ isClicked: true });
  };

  render() {
    if (this.state.isClicked) {
      return <div className="game-field-tile-clicked"></div>;
    }
    return <div className="game-field-tile-empty" onClick={this.handler}></div>;
  }
}
export default Tile;
