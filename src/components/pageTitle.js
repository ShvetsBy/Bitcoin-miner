import React, { Component } from 'react';

class MainTitle extends React.Component {
  render() {
    return <h1 className={this.props.classprop}> {this.props.label}</h1>;
  }
}
export default MainTitle;
