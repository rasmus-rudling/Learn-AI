import React, {useState} from 'react';
import classes from './playAroundWithExamples.module.scss';

import * as utility from '../../Common/Utility/utility';

import ExampleType from './ExampleType/exampleType';

const PlayAroundWithExamples = (props) => {
    const [whatExampleToUse, setWhatExampleToUse] = useState("Runner example");
    const [numberOfStates, setNumberOfStates] = useState(utility.runnerAMatrix.length);
    const [numberOfPossibleObservations, setNumberOfPossibleObservations] = useState(utility.runnerBMatrix[0].length);
    const [lengthOfObservationSequence, setLengthOfObservationSequence] = useState(utility.runnerObservationSequence.length)
    const [observationSequence, setObservationSequence] = useState(utility.runnerObservationSequence);
    const [runnerExampleValuesModified, setRunnerExampleValuesModified] = useState(false);
    const [weatherExampleValuesModified, setWeatherExampleValuesModified] = useState(false);
    const [assignProbabilitiesForUser, setAssignProbabilitiesForUser] = useState(true);
    const [numberOfDecimals, setNumberOfDecimals] = useState(4);

    const exampleTypeSelectedHandler = (newExampleTypeToUse) => {
        setWhatExampleToUse(newExampleTypeToUse);
    }

    return (
        <>
            <div className={classes.settings}>
                <b>Settings</b>

                <div className={classes.chooseExample}>
                    <ExampleType 
                        thisExampleTypeSelected={whatExampleToUse === "Runner example"}
                        exampleTypeSelectedHandler={exampleTypeSelectedHandler}
                        exampleType = "Runner example"
                    />
                    <ExampleType 
                        thisExampleTypeSelected={whatExampleToUse === "Weather example"}
                        exampleTypeSelectedHandler={exampleTypeSelectedHandler}
                        exampleType = "Weather example"
                    />
                        
                    <ExampleType 
                        thisExampleTypeSelected={whatExampleToUse === "Your own example"}
                        exampleTypeSelectedHandler={exampleTypeSelectedHandler}
                        exampleType = "Your own example"
                    />
                </div>

                <div className={classes.horizontalLine} />

                <div className={classes.detailedSettings}>
                    sadkjas
                </div>

                <div className={classes.matrices}>

                </div>
                
            </div>

            <div className={classes.alphaVisualizer}>

            </div>
        </>
    )
}

export default PlayAroundWithExamples;