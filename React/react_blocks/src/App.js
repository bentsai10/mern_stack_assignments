import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header.js';
import Navigation from './components/navigation.js';
import Main from './components/main.js';
import Subcontent from './components/subcontents.js';
import Advertisement from './components/advertisement.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className = "flex">
          <Navigation></Navigation>
          <Main>
            <div className = "flex">
              <Subcontent></Subcontent>
              <Subcontent></Subcontent>
              <Subcontent></Subcontent>
            </div>
            <Advertisement></Advertisement>
          </Main>
      </div>
      
    </div>
  );
}

export default App;
