import './App.css';

import React, { Component } from 'react'
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';

export default class App extends Component {

  state = {
    win: 0,
    lose: 0
  };

  render() {
    return (
      <div className="wrapper">
        <Header name='Камень - Ножницы - Бумага'>
          <div className="result">
            <h3>Побед: {this.state.win}</h3>
            <h3>Поражений: {this.state.lose}</h3>
          </div>
        </Header>
        <Icons/>
      </div>
    )
  }
}

