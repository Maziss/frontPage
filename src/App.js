import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
      );
  }
}

export default App;
