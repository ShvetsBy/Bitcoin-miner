import React, { Component } from 'react';
import MainTitle from '../components/pageTitle';
import Text from '../components/mainText';
import Button from '../components/button';
import { Link } from 'react-router-dom';

import '../App.css';

class Congrats extends React.Component {
  render() {
    return (
      <div className="wrapper-align-center">
        <div className="header">
          <MainTitle label="Congrats 🎉 " classprop="page-title" />
        </div>
        <div className="header">
          <Text
            label="Username, you’ve mined 34 bitcoins for 30 seconds."
            classprop="main-text"
          />
        </div>

        <div className="header">
          <div className="raw">
            <Link className="link" to="/stats">
              <Button classprop="button" label="Stats" />
            </Link>
            <Link className="link" to="/">
              <Button classprop="button" label="Menu" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Congrats;
