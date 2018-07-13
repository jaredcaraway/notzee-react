import React from 'react';
import './Body.css';

export default class Body extends React.Component {
  render(props) {
    return (
      <p className="Game-intro">
        Hi, {this.props.name}.
      </p>
    );
  }
}