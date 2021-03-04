import React, { Component } from "react";
import MainTitle from "../components/pageTitle";
import Button from "../components/button";
import GameField from "../modules/gameField";
import "../index.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const timeInteval = parseInt(localStorage.time) * 1000;
class Game extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.countdown = setInterval(
  //     () => (window.location.pathname = "/congrats"),
  //     timeInteval)
  //   );
  // }

  render() {
    return (
      <div className="game-wrapper">
        <div className="game-top-panel">
          <MainTitle label="Mine Hard Like the Devil&nbsp;👹" />

          <CountdownCircleTimer
            isPlaying
            duration={parseInt(localStorage.time)}
            colors={[["#f39c12", 0.33], ["#f39c12", 0.33], ["#f39c12"]]}
            size={60}
            strokeWidth={4}
            onComplete={() => (window.location.pathname = "/congrats")}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>

        <GameField />
      </div>
    );
  }
}

export default Game;
