import React from 'react';
import './App.css';
import Bowlerslist from './bowlingStuff/BowlersList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* call bowlerlist to show header and table */}
      <Bowlerslist />
    </div>
  );
}

export default App;
