import './App.css';

import React, { Component } from 'react'
import Header from './components/Header/Header';
import Icons from './components/Icons/Icons';

const VARIANTS = ['rock', 'scissor', 'paper']

export default class App extends Component {

  state = {
    win: 0,
    lose: 0,
    comp: ""
  };

  selectIcon = (type) => {
    const comp = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
    this.setState({comp})
  }

  render() {
    if (VARIANTS[0] && VARIANTS[2]) {
      
    }
    return (
      <div className="wrapper">
        <Header name='Камень - Ножницы - Бумага'>
          <div className="result">
            <h3>Побед: {this.state.win}</h3>
            <h3>Поражений: {this.state.lose}</h3>
          </div>
        </Header>
        <Icons click={this.selectIcon} bot={this.state.comp} variants={VARIANTS}/>
      </div>
    )
  }
}

