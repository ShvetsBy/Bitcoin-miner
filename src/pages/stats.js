import React, { Component } from "react";
import MainTitle from "../components/pageTitle";
import Table from "../components/table";
import Text from "../components/mainText";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { superagent } from "superagent";
import { getdata } from "../components/reciveData";

import "../App.css";

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      error: null,
      data: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getdata()
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading === true) {
      return <Text classprop="main-text" label="loading" />;
    }
    if (this.state.error !== null && this.state.isLoading === false) {
      return <Text classprop="main-text" label={this.state.error} />;
    }
    console.log(this.state.data);
    return (
      <div className="wrapper-align-center">
        <div className="header">
          <MainTitle label="Stats🔮 " classprop="page-title" />
        </div>
        <div className="header">
          <Table stats={this.state.data} />
        </div>

        <div className="header">
          <Link className="link" to="/react-game">
            <Button classprop="button" label="Menu" />
          </Link>
        </div>
      </div>
    );
  }
}
export default Stats;
