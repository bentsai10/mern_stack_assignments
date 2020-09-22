import React from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './components/person.js';

function App() {
  return (
    <div className="App">
      <Person firstName = "Jane" lastName = "Doe" age = "45" hairColor = "Black"></Person>
      <Person firstName = "John" lastName = "Smith" age = "88" hairColor = "Brown"></Person>
      <Person firstName = "Millard" lastName = "Fillmore" age = "50" hairColor = "Brown"></Person>
      <Person firstName = "Maria" lastName = "Smith" age = "62" hairColor = "Brown"></Person>
    </div>
  );
}

export default App;
