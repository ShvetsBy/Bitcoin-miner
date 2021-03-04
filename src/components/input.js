import React, { Component } from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onChangeInput(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit() {
    localStorage.setItem('name', this.state.name);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          className={this.props.classprop}
          onChange={(event) => this.onChangeInput(event)}
        ></input>
      </form>
    );
  }
}
export default Input;
