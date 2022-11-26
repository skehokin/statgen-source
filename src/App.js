import React, { Component } from 'react';
import './App.css';
import {Character} from './view/screens/character.tsx';

class App extends Component {
  render() {
    return (
    	<div className='App'>
            <Character/>
        </div>
    );
  }
}

export default App;
