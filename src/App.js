import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/like_button'
import Header from './components/header'


function App() {
  return (
    <div class="ui container">
    <Header/>
    <LikeButton/>
    
    <div className="App">
    
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload LOL.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fart app
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
