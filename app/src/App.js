import logo from './logo.svg';
import './App.css';
import {Button, Container, DeclineButton} from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
          <Button>Test</Button> <DeclineButton>Decline</DeclineButton>
        </Container>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container>
          <Button>Yes</Button> <DeclineButton>No</DeclineButton>
        </Container>

      </header>
    </div>
  );
}

export default App;
