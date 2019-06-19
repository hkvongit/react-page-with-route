import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './components/navbar';
import Rjs from './components/rjs';
import JavaScript from './components/java_script';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="container">
        <Navbar/>
        <Route exact path="/" component={Rjs} />
        <Route exact path="/java_script" component={JavaScript} />
        {/* <Rjs/> */}
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
