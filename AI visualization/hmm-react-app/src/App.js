import React from 'react';
import './App.module.css';
import './typography.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import ForwardAlgorithm from './Components/ForwardAlgorithm/forwardAlgorithm';

const App = () => {
  return (
    <div className="App">
        <ForwardAlgorithm />
        
    </div>
  );
}

export default App;
