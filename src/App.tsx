import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="footer">
        <a className="message" href="marvel.html"></a>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="message">
          Hi. I'm Niklas Fransson.
        </h1>
      </div>
    </div>
  );
}

export default App;
