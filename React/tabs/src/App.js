import React, {useState} from 'react';
import './App.css';

import Tab from './components/tab.js'
import Content from './components/content.js'

function App() {
  const[tabs, setTabs] = useState([
    {label: "Tab 1", content: "Tab 1 content", clicked: true},
    {label: "Tab 2", content: "Tab 2 content", clicked: false},
    {label: "Tab 3", content: "Tab 3 content", clicked: false},
  ]);
  const[text, setText] = useState(tabs[0].content)
  console.log(text);
  return (
    <div className="App">
      <div style = {{display: 'flex', marginTop: 20, marginLeft: 450}}>
        {tabs.map((tab) => (
          <Tab title = {tab.label} content = {tab.content} clicked = {tab.clicked} setText = {setText}></Tab>
        ))}
      </div>
      <Content text = {text}></Content>
      
    </div>
  );
}

export default App;
