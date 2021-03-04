import React, { Component } from "react";
import WholeTile from "../components/wholeTile";
import Tile from "../components/Tile";
import Randomize from "../components/arrayRandomizer";
import Text from "../components/mainText";
import Button from "../components/button";

import "../index.css";

class GameField extends Component {
  constructor() {
    super();
    this.state = {
      BTC: 0,
      field: Randomize(
        parseInt(localStorage.emptyTiles),
        parseInt(localStorage.yeildTiles)
      ),
    };
    // this.fieldHandler = this.fieldHandler.bind(this);
  }

  handler = () => {
    this.setState({ BTC: this.state.BTC + 1 });
    localStorage.setItem("Score", this.state.BTC);
  };

  render() {
    return (
      <div>
        <div className="game-panel">
          <div className="raw">
            <Text label={localStorage.name} classprop="bold-text" />
            <Text label="you&#39;ve mined:" classprop="main-text" />
            <Text label={this.state.BTC} classprop="bold-text" />
          </div>
          <div>
            <Button label="Restart" classprop="button" />
          </div>
        </div>

        <div className="game-field">
          {this.state.field.map((item, index) =>
            item === 0 ? (
              <Tile key={index} />
            ) : (
              <WholeTile key={index} handler={this.handler} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default GameField;
