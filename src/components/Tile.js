import React, { Component } from 'react';

class Tile extends React.Component {
  render() {
    return (
      <div className="whole-tile">
        <div className={this.props.classprop}></div>
      </div>
    );
  }
}
export default Tile;
