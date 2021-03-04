import React, { Component } from 'react';
import coin from '../img/bitcoin-icon.png';

class Coin extends React.Component {
  render() {
    return <img src={coin} className={this.props.classprop} />;
  }
}
export default Coin;
