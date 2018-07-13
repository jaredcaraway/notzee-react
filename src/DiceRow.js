import React from 'react';
import Die from './Die';
import './DiceRow.css';

function DiceRow() {
  return (
    <div className="DiceRow">
      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
    </div>
  );
}

export default DiceRow;