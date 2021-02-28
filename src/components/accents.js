import React, { Component } from 'react';

class AccentText extends React.Component {
  render() {
    return <p className={this.props.classprop}> {this.props.label}</p>;
  }
}
export default AccentText;
