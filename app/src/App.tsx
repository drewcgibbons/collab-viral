import React from 'react';
import logo from './logo.svg';
import {Button, ButtonText, Container, DeclineButton} from './components/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container>
          <Button>
            <ButtonText>Yes</ButtonText>
          </Button> 
          <DeclineButton>
            <ButtonText>No</ButtonText>
          </DeclineButton>
        </Container>
      </header>
    </div>
  );
}

export default App;
