import React from 'react';
import './App.module.css';
import './typography.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import ForwardAlgorithm from './Components/ForwardAlgorithm/forwardAlgorithm';

// --- Weather example imports ---
import weatherS0 from './Resources/weather/weatherState0.svg';
import weatherS1 from './Resources/weather/weatherState1.svg';
import weatherS2 from './Resources/weather/weatherState2.svg';
import weatherO0 from './Resources/weather/weatherObservation0.svg';
import weatherO1 from './Resources/weather/weatherObservation1.svg';
import weatherO2 from './Resources/weather/weatherObservation2.svg';
import weatherO3 from './Resources/weather/weatherObservation3.svg';
import weatherO4 from './Resources/weather/weatherObservation4.svg';

// --- Runner example imports ---
import runnerS0 from './Resources/runner/runnerState0.svg';
import runnerS1 from './Resources/runner/runnerState1.svg';
import runnerS2 from './Resources/runner/runnerState2.svg';
import runnerS3 from './Resources/runner/runnerState3.svg';
import runnerO0 from './Resources/runner/runnerObservation0.png';
import runnerO1 from './Resources/runner/runnerObservation1.png';
import runnerO2 from './Resources/runner/runnerObservation2.png';
import runnerO3 from './Resources/runner/runnerObservation3.png';
import runnerO4 from './Resources/runner/runnerObservation4.png';
import runnerO5 from './Resources/runner/runnerObservation5.png';

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

export const weatherStatesImages = [weatherS0, weatherS1, weatherS2];

export const weatherObservationsImages = [weatherO0, weatherO1, weatherO2, weatherO3, weatherO4];

export const weatherObservationSequence = [0, 3, 1, 4, 3];

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

export const runnerStatesImages = [runnerS0, runnerS1, runnerS2, runnerS3];
export const runnerObservationsImages = [runnerO0, runnerO1, runnerO2, runnerO3, runnerO4, runnerO5];
export const runnerObservationSequence = [0, 1, 3, 2, 4, 5];

const App = () => {
  return (
    <div className="App">
        <ForwardAlgorithm />
        
    </div>
  );
}

export default App;
