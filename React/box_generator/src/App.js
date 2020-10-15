import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import BoxGenerator from './components/BoxGenerator.js'
import Box from './components/Box.js'

function App() {
  const [blocks, setBlocks] = useState({
      colors:[],
    });

  return (
    <div className="App">
      <BoxGenerator setBox = {setBlocks} box = {blocks}></BoxGenerator>
      {blocks.colors.map((color) => (
        <Box color = {color}></Box>
      ))}
    </div>
  );
}

export default App;
