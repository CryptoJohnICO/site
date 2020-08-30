import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/like_button'
import TopHeader from './components/topheader'
import HeaderLow from './components/headerlow'
import Stats from './components/stats'
import Footer from './components/footer'
import { Container, Header } from 'semantic-ui-react'


function App() {
  return (
    <div class="ui container">
    <TopHeader/>
    <HeaderLow/>
    {/*<LikeButton/>*/}
    <br></br><br></br><br></br>
    <Stats/>
    
    <div className="App">
    
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <br></br><br></br><br></br>
    <Container text id="token">
      <Header as='h2'>Token</Header>
      <p>OMG a fart token? who would have thought of this?</p>
    </Container>
    <br></br><br></br><br></br>
    <Container text id="metrics">
      <Header as='h2'>Metrics</Header>
      <p>OMG a fart token? who would have thought of this?</p>
    </Container>

    <br></br><br></br><br></br>
    <Container text id="faq">
      <Header as='h2'>FAQ</Header>
      <p>What is Fart?</p>
    </Container>
    <br></br><br></br><br></br>
    <Footer/>
    </div>
  );
}

export default App;
