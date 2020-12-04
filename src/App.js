import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import MusicList, {MusicTable} from "./MusicList";


function App() {
  
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React now
          </a>
        </header>
        <MusicList/>
        <MusicTable/>
      </div>
    );
  }
  
  



export default App;