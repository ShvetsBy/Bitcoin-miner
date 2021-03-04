import React, { Component } from 'react';
import logo from '../img/rs_school_js.svg';

class School extends React.Component {
  render() {
    return <img src={logo} className={this.props.classprop} />;
  }
}
export default School;
