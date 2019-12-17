import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Main from './main/main'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
