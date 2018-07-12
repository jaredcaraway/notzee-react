import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

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
