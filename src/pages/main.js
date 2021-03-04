import React, { Component } from "react";
import MainTitle from "../components/pageTitle";
import Text from "../components/mainText";
import Button from "../components/button";
import Dropdown from "../components/dropdown";
import Volume from "../components/volume";
import School from "../components/logo";
import Tile from "../components/Tile";
import Coin from "../components/coin";
import NameBlock from "../modules/name";
import FieldSetting from "../modules/fieldSettings";
import { Link } from "react-router-dom";
import "../App.css";
import { fieldCalc } from "../components/fieldCalc";
import Sounds from "../components/playSound";

class Main extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <section className="content">
          <div className="header">
            <div className="section"></div>
            <MainTitle classprop="page-title" label="Bitcoin Miner ⛏" />
            <Text classprop="accent-text" label="Tap as hard, as you can" />
          </div>
          <div className="section">
            <NameBlock />
          </div>

          <FieldSetting />

          <Sounds />

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
                <Button
                  classprop="button"
                  label="Start game"
                  onСlick={fieldCalc()}
                />
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
              <a href="https://www.zapsplat.com/" target="_blanc">
                <Text classprop="small-text" label=" Sound from Zapsplat.com" />
              </a>
            </div>
          </div>
        </section>
        <section className="illustration">
          <div className="illustration-tile">
            <Coin classprop="illustration-coin" />
          </div>
        </section>
      </div>
    );
  }
}
export default Main;
