import React, { Component } from 'react';
import MainTitle from '../components/pageTitle';
import Table from '../components/table';
import Button from '../components/button';
import { Link } from 'react-router-dom';

import '../App.css';
const stats = [
  {
    player: 'Charlie',
    amount: '234',
    time: '30 sec',
    date: '24.02.2022',
  },
  {
    player: 'Mac',
    amount: '24',
    time: '30 sec',
    date: '24.02.2022',
  },
  {
    player: 'Charlie',
    amount: '4',
    time: '30 sec',
    date: '24.02.2022',
  },
  {
    player: 'Charlie',
    amount: '234',
    time: '30 sec',
    date: '24.02.2022',
  },
  {
    player: 'Mac',
    amount: '24',
    time: '30 sec',
    date: '24.02.2022',
  },
  {
    player: 'Charlie',
    amount: '4',
    time: '30 sec',
    date: '24.02.2022',
  },
];

class Stats extends React.Component {
  render() {
    return (
      <div className="wrapper-align-center">
        <div className="header">
          <MainTitle label="Stats🔮 " classprop="page-title" />
        </div>
        <div className="header">
          <Table stats={stats} />
        </div>

        <div className="header">
          <Link className="link" to="/">
            <Button classprop="button" label="Menu" />
          </Link>
        </div>
      </div>
    );
  }
}
export default Stats;
