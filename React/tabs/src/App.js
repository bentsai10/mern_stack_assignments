import React, {useState} from 'react';
import './App.css';

import TabsContext from "./context/Context.js";
import Tab from './components/tab.js'
import Content from './components/content.js'

function App() {
  const[state, setState] = useState({
    tabs:[
      "Tab 1 content",
      "Tab 2 content",
      "Tab 3 content",
    ],
    active: null
  });
  return (
    <div className="container">
      <TabsContext.Provider value={{ state, setState }}>
        <Tab />
        <Content />
      </TabsContext.Provider>
    </div>
  );
}

export default App;
