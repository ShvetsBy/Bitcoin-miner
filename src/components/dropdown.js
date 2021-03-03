import React, { Component } from "react";

class Dropdown extends React.Component {
  render() {
    return (
      <select className="dropdown" onChange={this.props.onChange}>
        {this.props.data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}
export default Dropdown;
