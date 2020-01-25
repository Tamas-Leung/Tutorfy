import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Homepage from './Components/Homepage'
import './App.css';

function App() {
  return  (
    <BrowserRouter>
      <Route exact path='/' component={Homepage}/>
    </BrowserRouter>
  )
}

export default App;
