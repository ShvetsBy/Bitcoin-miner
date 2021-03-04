import React, { Component } from "react";

class Volume extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: { value: 0.5 },
  //   };
  //   this.volumeHandler = this.volumeHandler.bind(this);
  // }

  // volumeHandler(e) {
  //   this.setState({ value: e.target.value });
  // }

  render() {
    return (
      <form>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}
export default Volume;
