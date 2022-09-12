import React from 'react';
import './App.css';
import Val2022 from './Val2022';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="footer">
        <div className="linkWrapper">
          <a className="linkmessage" href="cush.html">cush</a>
          <a className="linkmessage" href="executeorder66.html">executeorder66</a>
          <a className="linkmessage" href="marvel.html">Marvel</a>
          <a className="linkmessage" href="norra_granstorps/index.html">Norra Granstorpsvägen 2</a>
        </div>
        <h1 className="message">
          Hi. I'm Niklas Fransson.
        </h1>
      </div>
      <Val2022></Val2022>
    </div>
  );
}

export default App;
