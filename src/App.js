import React from 'react';


// this imports css files
import logo from './logo.svg';
import './App.css';
// this works as require, require is an old way. its the same as require. 
// this move things within files. 




function App() { // componate which allows html. // this will show up on the page. 
  return ( // must put somwthing on this line. 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Today i <strong> walked  </strong>. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello :)
        </a>
      </header>
    </div>
  );
}

export default App; /*Js file exports a file. App is a function which gets exported. 
this is a function call in react. importing file in antoehr file, then creates new file. 
*/
