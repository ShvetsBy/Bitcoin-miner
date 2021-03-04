import React, { Component } from "react";
import Dropdown from "../components/dropdown";
import Volume from "../components/volume";
import Text from "../components/mainText";
import OST from "../sounds/BTC-OST.mp3";
import { Howl, Howler } from "howler";
import { gameInfo } from "../Const/gameInfo";
import play from "../img/outline_play_circle_filled_black_24dp.png";
import pause from "../img/outline_pause_circle_filled_black_24dp.png";

import "../App.css";

// const audio = new Audio();
// audio.preload = "auto";
// audio.src = OST;

const sound = new Howl({
  src: [OST],
  autoplay: false,
  loop: true,
  //   volume: 0.5,
});

// Howler.volume(0.5);

class Sounds extends React.Component {
  constructor() {
    super();
    this.state = {
      sound: null,
      icon: play,
      volume: 0.8,
    };
    this.audioHandler = this.audioHandler.bind(this);
    this.volumeHadler = this.volumeHadler.bind(this);
  }

  audioHandler() {
    if (this.state.sound === "off" || this.state.sound == null) {
      sound.play();
      this.setState({ sound: "on", icon: pause });
    } else {
      sound.pause();
      this.setState({ sound: "off", icon: play });
    }
  }

  volumeHadler(e) {
    this.setState({ volume: e.target.value });
    Howler.volume(e.target.value);
  }

  render() {
    return (
      <div className="section">
        <div className="raw">
          <Text classprop="main-text" label="Music:" />
          <button className="music-controls">
            <img
              src={this.state.icon}
              className="music-controls-icon"
              onClick={this.audioHandler}
            />
          </button>
          <Volume onChange={this.volumeHadler} value={this.state.volume} />
        </div>
      </div>
    );
  }
}

export default Sounds;
