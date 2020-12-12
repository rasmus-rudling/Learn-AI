import React from 'react';
import './typography.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import HiddenMarkovModel from './Components/HiddenMarkovModel/hiddenMarkovModel';

import TheBasics from './Components/HiddenMarkovModel/TheBasics/theBasics';
import Theory from './Components/HiddenMarkovModel/TheBasics/Theory/theory';
import RunnerExample from './Components/HiddenMarkovModel/TheBasics/RunnerExample/runnerExample';
import WeatherExample from './Components/HiddenMarkovModel/TheBasics/WeatherExample/weatherExample';
import MathematicalConcepts from './Components/HiddenMarkovModel/TheBasics/MathematicalConcepts/mathematicalConcepts';

import ForwardAlgorithm from './Components/HiddenMarkovModel/ForwardAlgorithm/forwardAlgorithm';
import BackwardAlgorithm from './Components/HiddenMarkovModel/BackwardAlgorithm/backwardAlgorithm';
import ViterbiAlgorithm from './Components/HiddenMarkovModel/ViterbiAlgorithm/viterbiAlgorithm';
import BaumWelchAlgorithm from './Components/HiddenMarkovModel/BaumWelchAlgorithm/baumWelchAlgorithm';
import AdvancedTopics from './Components/HiddenMarkovModel/AdvancedTopics/advancedTopics';

const App = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <HiddenMarkovModel />
            </Route>

            <Route exact path="/hmm">
                <HiddenMarkovModel />
            </Route>

            <Route exact path="/hmm/theBasics">
                <TheBasics />
            </Route>

            <Route exact path="/hmm/theBasics/theory">
                <Theory />
            </Route>

            <Route exact path="/hmm/theBasics/runnerExample">
                <RunnerExample />
            </Route>

            <Route exact path="/hmm/theBasics/weatherExample">
                <WeatherExample />
            </Route>

            <Route exact path="/hmm/theBasics/mathematicalConcepts">
                <MathematicalConcepts />
            </Route>
            
            <Route exact path="/hmm/forwardAlgorithm">
                <ForwardAlgorithm />
            </Route>

            <Route exact path="/hmm/backwardAlgorithm">
                <BackwardAlgorithm />
            </Route>

            <Route exact path="/hmm/viterbiAlgorithm">
                <ViterbiAlgorithm />
            </Route>

            <Route exact path="/hmm/baumWelchAlgorithm">
                <BaumWelchAlgorithm />
            </Route>

            <Route exact path="/hmm/advancedTopics">
                <AdvancedTopics />
            </Route>
        </Switch>
    </Router>
       
  );
}

export default App;
