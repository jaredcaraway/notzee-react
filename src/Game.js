import React, { Component } from 'react';
import './Game.css';
import StatusBar from './StatusBar';
import DiceRow from './DiceRow';
import RollButton from './RollButton';
import ScoreContainer from './ScoreContainer';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array(5).fill(null),
      players: [
        {
          name: '',
          turn: null,
          roll: null,
          score: null
        }
      ],
      currentTurn: null,
    };
  }

  render() {
    return (
      <div className="Game">
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

export default Game;
