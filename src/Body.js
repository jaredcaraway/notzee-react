import React from 'react';
import './Body.css';

export default class Body extends React.Component {
  render(props) {
    return (
      <p className="App-intro">
        Hi, {this.props.name}.
      </p>
    );
  }
}