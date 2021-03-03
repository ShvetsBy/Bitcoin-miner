import React, { Component } from "react";
import Text from "../components/mainText";

import "../index.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time{}, left: parseInt(localStorage.time) };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.left);
    this.setState({ left: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.left > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <Text classprop="main-text" label="left" />
        <Text classprop="bold-text" label={this.state.left} />
      </div>
    );
  }
}

export default Timer;
