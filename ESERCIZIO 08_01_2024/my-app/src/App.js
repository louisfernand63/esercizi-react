/*import logo from './logo.svg';*/

import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import { TableComponent } from './components/TableComponent';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

let users = [];

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => users => json) */

const promise = await fetch('https://jsonplaceholder.typicode.com/users');
users = await promise.json();

function App() {
  return (
    <div className="App">
      <ButtonComponent testo="Click Click!" />
      <ImageComponent image="https://cms-cdn.placeholder.co/toronto_be6ed650f3.png?width=384" title="Toronto" />
      <TableComponent listaUtenti={users} />
    </div>
  );
}

export default App;
