import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.classprop}> {this.props.label}</button>
    );
  }
}
export default Button;
