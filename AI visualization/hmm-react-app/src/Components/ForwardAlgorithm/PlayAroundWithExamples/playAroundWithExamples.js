import React, {useState} from 'react';
import classes from './playAroundWithExamples.module.scss';

import * as utility from '../../Common/Utility/utility';

import ExampleType from './ExampleType/exampleType';
import UserExampleInput from './UserExampleInput/userExampleInput';

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

    const changeSettingsHandler = (typeOfSettingToChange, newValue) => {
        if (typeOfSettingToChange === "states") {
            setNumberOfStates(newValue);
        } else if (typeOfSettingToChange === "observations") {
            setNumberOfPossibleObservations(newValue);
        } else if (typeOfSettingToChange === "length of observation sequence") {
            setLengthOfObservationSequence(newValue);
        } else if (typeOfSettingToChange === "observation sequence") {
            setObservationSequence(newValue);
        }
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

                <div className={classes.exampleSettings}>
                    <UserExampleInput 
                        typeOfSetting="states"
                        changeSettingsHandler = {changeSettingsHandler}
                        minValue = "1"
                        maxValue = "7"
                        
                    >
                        States (<i>max 7</i>):
                    </UserExampleInput>
                    
                    <UserExampleInput 
                        typeOfSetting="observations"
                        changeSettingsHandler = {changeSettingsHandler}
                        minValue = "1"
                        maxValue = "7"
                    >
                        Observations (<i>max 7</i>):
                    </UserExampleInput>
                    
                    <UserExampleInput 
                        typeOfSetting="length of observation sequence"
                        changeSettingsHandler = {changeSettingsHandler}
                        minValue = "1"
                        maxValue = "7"
                    >
                        Length of observation sequence (<i>max 7</i>):
                    </UserExampleInput>
                    
                    <UserExampleInput 
                        typeOfSetting="observation sequence"
                        changeSettingsHandler = {changeSettingsHandler}
                        minValue = "0"
                        maxValue = {numberOfPossibleObservations}
                    >
                        Observation sequence (<i>input = observation index</i>):
                    </UserExampleInput>
                </div>

                <div className={classes.horizontalLine} />

                <div className={classes.matricesSettings}>
                    asdasdad
                </div>
                
            </div>

            <div className={classes.alphaVisualizer}>

            </div>
        </>
    )
}

export default PlayAroundWithExamples;