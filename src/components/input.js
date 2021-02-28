import React, { Component } from 'react';

class Input extends React.Component {
  render() {
    return <input type="text" className={this.props.classprop}></input>;
  }
}
export default Input;
