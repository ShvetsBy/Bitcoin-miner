import React, { Component } from 'react';
import '../index.css';
import Text from '../components/mainText';
import Input from '../components/input';

class NameBlock extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (localStorage.name) {
      return (
        <div className="raw">
          <Text classprop="main-text" label="Player:" />
          <Text classprop="bold-text" label={localStorage.name} />
        </div>
      );
    }
    return (
      <div className="raw">
        <Text classprop="main-text" label="Enter your name" />
        <Input />
      </div>
    );
  }
}
export default NameBlock;
