import React, { Component } from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <select className="dropdown">
        {this.props.data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    );
  }
}
export default Dropdown;
