import React, { Component } from 'react';
import './App.css';
import StatusBar from './StatusBar';
import DiceRow from './DiceRow';
import RollButton from './RollButton';
import ScoreContainer from './ScoreContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array(5).fill(null),
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Notzee! A Yahtzee Clone</h1>
        <StatusBar 
          currentPlayer="1"
          currentTurn="3"
          currentRoll="2"
        />
        <DiceRow />
        <RollButton />
        <ScoreContainer />
      </div>
    );
  }
}

export default App;
