import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body name="Jared"/>
      </div>
    );
  }
}

export default App;
