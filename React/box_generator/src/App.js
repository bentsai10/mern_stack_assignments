import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import BoxGenerator from './components/BoxGenerator.js'
import BoxDisplay from './components/BoxDisplay.js'

function App() {
  const [blocks, setBlocks] = useState([]);

  const addBlocks = (blocks) =>{
    setBlocks(blocks);
  }
  return (
    <div className="App">
      <BoxGenerator currentState = {blocks} add = {addBlocks}></BoxGenerator>
      <BoxDisplay currentState = {blocks}></BoxDisplay>
    </div>
  );
}

export default App;
