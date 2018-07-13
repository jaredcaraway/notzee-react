import React from 'react';
import './StatusBar.css';

class StatusBar extends React.Component {
  render(props) {
    return (
      <div className="StatusBar">
        <div className="StatusBar-player">Player: {this.props.currentPlayer}/2</div>
        <div className="StatusBar-turn">Turn: {this.props.currentTurn}/13</div>
        <div className="StatusBar-roll">Roll: {this.props.currentRoll}/3</div>
      </div>
    );
  }
}

export default StatusBar;