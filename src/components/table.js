import React, { Component } from "react";
import MainTitle from "../components/pageTitle";
import Text from "../components/mainText";
import Coin from "../components/coin";

import "../App.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="table-data-headings">
          <Text classprop="bold-text" label="Player" />
        </th>
        <th className="table-data-headings">
          <Coin classprop="stats-coin" />
        </th>
        <th className="table-data-headings">
          <Text classprop="bold-text" label="Time" />
        </th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.stats.map((row, index) => {
    return (
      <tr key={index}>
        <td className="table-data">
          <Text classprop="main-text" label={row.name} />
        </td>
        <td className="table-data">
          <Text classprop="main-text" label={row.score} />
        </td>
        <td className="table-data-time">
          <Text classprop="main-text" label={row.time} />
          <Text classprop="main-text" label="sec" />
        </td>
      </tr>
    );
  });

  return <tbody className="table-body">{rows}</tbody>;
};

class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody stats={this.props.stats} />
      </table>
    );
  }
}
export default Table;
