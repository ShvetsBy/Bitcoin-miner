import React, { Component } from 'react';

class Text extends React.Component {
  render() {
    return <p className={this.props.classprop}> {this.props.label}</p>;
  }
}
export default Text;
