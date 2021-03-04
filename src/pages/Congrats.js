import React, { Component } from "react";
import MainTitle from "../components/pageTitle";
import Text from "../components/mainText";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { sentData } from "../components/sendStats";

import "../App.css";

class Congrats extends React.Component {
  componentDidMount() {
    sentData(
      localStorage.getItem("name"),
      localStorage.getItem("Score"),
      localStorage.getItem("time")
    );
  }

  render() {
    return (
      <div className="wrapper-align-center appear">
        <div className="congrats-header">
          <MainTitle label="Congrats,&nbsp;" classprop="page-title" />
          <MainTitle label={localStorage.name} classprop="page-title" />
          <MainTitle label="&nbsp;🎉 " classprop="page-title" />
        </div>
        <div className="header">
          <div className="congrats-raw">
            <Text label="You’ve mined " classprop="Bold-text" />
            <Text label={localStorage.Score} classprop="bold-text" />
            <Text label="BTC" classprop="bold-text" />
            <Text label="for" classprop="Bold-text" />
            <Text label={localStorage.time} classprop="bold-text" />
            <Text label="sec." classprop="bold-text" />
          </div>
        </div>

        <div className="header">
          <div className="raw">
            <Link className="link" to="/stats">
              <Button classprop="button" label="Stats" />
            </Link>
            <Link className="link" to="/react-game">
              <Button classprop="button" label="Menu" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Congrats;
