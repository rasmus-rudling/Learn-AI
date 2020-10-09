import React from 'react';
import './App.module.css';
import './typography.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ForwardAlgorithm from './Components/ForwardAlgorithm/forwardAlgorithm';

// --- Weather example ---
export const weatherPiVector = [0.435, 0.125, 0.44]

export const weatherAMatrix = [
    [0.42, 0.32, 0.26],
    [0.25, 0.40, 0.35],
    [0.49, 0.33, 0.18]
] 

export const weatherBMatrix = [
    [0.17, 0.00, 0.37, 0.04, 0.42],
    [0.24, 0.41, 0.09, 0.23, 0.03],
    [0.11, 0.67, 0.04, 0.10, 0.08]
]


// --- Runner example ---
export const runnerPiVector = [1.0, 0.0, 0.0, 0.0]

export const runnerAMatrix = [
    [0.3, 0.7, 0.0, 0.0],
    [0.0, 0.8, 0.2, 0.0],
    [0.0, 0.4, 0.5, 0.1],
    [0.0, 0.0, 0.0, 0.0]
] 

export const runnerBMatrix = [
    [1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.05, 0.38, 0.34, 0.20, 0.03, 0.0],
    [0.0, 0.05, 0.23, 0.28, 0.44, 0.0],
    [0.0, 0.0, 0.0, 0.0, 0.18, 0.82]
]


const App = () => {
  return (
    <div className="App">
        <ForwardAlgorithm />
        
    </div>
  );
}

export default App;
