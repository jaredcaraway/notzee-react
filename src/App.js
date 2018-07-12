import React, { Component } from 'react';
import './App.css';
import StatusBar from './StatusBar';
import DiceRow from './DiceRow';
import RollButton from './RollButton';
import ScoreContainer from './ScoreContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatusBar />
        <DiceRow />
        <RollButton />
        <ScoreContainer />
      </div>
    );
  }
}

export default App;
