import React, { Component } from "react";
import "../index.css";
import Text from "../components/mainText";
import Dropdown from "../components/dropdown";
import { gameInfo } from "../Const/gameInfo";

// import setFieldSize from '../components/setFiledSize';
// const time = [30, 45, 90];

const fieldSize = Object.entries(gameInfo.size.data)
  .sort((a, b) => a[1] - b[1])
  .map((item) => item[0]);

// const fieldSize = Object.keys(gameInfo.size.data);
const yeild = Object.entries(gameInfo.yeild.data)
  .sort((a, b) => a[1] - b[1])
  .map((item) => item[0]);

class FieldSetting extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 30000,
      size: 200,
      yeild: 0.6,
    };
  }

  handleSubmitTime(e) {
    localStorage.setItem("time", e.target.value);
  }

  handleSubmitSize(e) {
    localStorage.setItem("size", gameInfo.size.data[e.target.value]);
  }

  handleSubmitYeild(e) {
    localStorage.setItem("yeild", gameInfo.yeild.data[e.target.value]);
  }

  render() {
    return (
      <div className="section">
        <form className="raw">
          <label className="main-text">Time:</label>
          <Dropdown
            data={gameInfo.time.data}
            id="GET-time"
            onChange={this.handleSubmitTime}
          />
        </form>
        <form className="raw">
          <label className="main-text">Field size:</label>
          <Dropdown
            data={fieldSize}
            id="GET-size"
            onChange={this.handleSubmitSize}
          />
        </form>
        <form className="raw">
          <label className="main-text">Yeild:</label>
          <Dropdown
            data={yeild}
            id="GET-yeild"
            onChange={this.handleSubmitYeild}
          />
        </form>
      </div>
    );
  }
}
export default FieldSetting;
