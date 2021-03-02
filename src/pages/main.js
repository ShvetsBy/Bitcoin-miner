import React, { Component } from 'react';
import MainTitle from '../components/pageTitle';
import Text from '../components/mainText';
import Button from '../components/button';
import Dropdown from '../components/dropdown';
import Input from '../components/input';
import Volume from '../components/volume';
import School from '../components/logo';
import Tile from '../components/Tile';
import Coin from '../components/coin';
import { Link } from 'react-router-dom';
import '../App.css';

class Main extends React.Component {
  render() {
    const time = [30, 45, 90];
    const fieldSize = ['small', 'normal', 'large'];
    const yeild = ['Mongolian Steppe', 'European Average', 'Belorusian Magic'];
    const music = ['On', 'off'];
    return (
      <div className="wrapper">
        <section className="content">
          <div className="header">
            <div className="section"></div>
            <MainTitle classprop="page-title" label="Bitcoin Miner ⛏" />
            <Text classprop="accent-text" label="Tap as hard, as you can" />
          </div>
          <div className="section">
            <div className="raw">
              <Text classprop="main-text" label="Enter your name" />
              <Input />
            </div>
          </div>
          <div className="section">
            <div className="raw">
              <Text classprop="main-text" label="Time:" />
              <Dropdown data={time} />
            </div>
            <div className="raw">
              <Text classprop="main-text" label="Field size:" />
              <Dropdown data={fieldSize} />
            </div>
            <div className="raw">
              <Text classprop="main-text" label="Yeild:" />
              <Dropdown data={yeild} />
            </div>
          </div>
          <div className="section">
            <div className="raw">
              <Text classprop="main-text" label="Music:" />
              <Dropdown data={music} />
            </div>
            <div className="raw">
              <Text classprop="main-text" label="Volume:" />
              <Volume />
            </div>
          </div>

          <div className="section">
            <div className="raw">
              <Link className="link" to="/stats">
                <Button
                  classprop="button"
                  label="Stats"
                  onСlick="window.location.pathname = '/play'"
                />
              </Link>

              <Link className="link" to="/game">
                <Button classprop="button" label="Start game" />
              </Link>
            </div>
          </div>
          <div className="footer">
            <div className="raw">
              <a href="https://rs.school/" target="_blanc">
                <School classprop="school-logo" />
              </a>
              <a href="https://github.com/ShvetsBy" target="_blanc">
                <Text classprop="small-text" label="Ivan Shvets, 2021" />
              </a>
            </div>
          </div>
        </section>
        <section className="illustration">
          <Coin classprop="illustration-coin" />
          <Tile classprop="illustration-tile" />
        </section>
      </div>
    );
  }
}
export default Main;
