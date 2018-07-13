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
          roll: null,
          score: null
        }
      ],
      currentTurn: null,
    };
    const maxTurns = 13;
  }

  rollDice() {
    let dice = [];
    for (let i=0; i<5; i++) {
      dice.push(Math.ceil(Math.random() * 6));
    }
    this.setState({dice: dice});
  }

  componentDidMount() {
    this.rollDice();
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
