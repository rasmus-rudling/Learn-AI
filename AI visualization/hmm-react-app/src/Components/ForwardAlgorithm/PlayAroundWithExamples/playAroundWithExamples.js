import React, {useState} from 'react';
import classes from './playAroundWithExamples.module.scss';

import * as utility from '../../Common/Utility/utility';

import ExampleType from './ExampleType/exampleType';
import ExampleTypeModification from './ExampleTypeModification/exampleTypeModification';
import UserExampleInput from './UserExampleInput/userExampleInput';
import InputMatrix from './InputMatrix/inputMatrix';

const PlayAroundWithExamples = (props) => {
    const [whatExampleToUse, setWhatExampleToUse] = useState("Runner example");
    const [exampleMatrixA, setExampleMatrixA] = useState(utility.runnerAMatrix);
    const [exampleMatrixB, setExampleMatrixB] = useState(utility.runnerBMatrix);
    const [exampleVectorPi, setExampleVectorPi] = useState(utility.runnerPiVector);
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

    const assignProbabilitiesHandler = () => {
        setAssignProbabilitiesForUser(!assignProbabilitiesForUser);
    }

    const changeSettingsHandler = (typeOfSettingToChange, newValue) => {
        if (typeOfSettingToChange === "states") {
            setNumberOfStates(newValue);
        } else if (typeOfSettingToChange === "observations") {
            setNumberOfPossibleObservations(newValue);
        } else if (typeOfSettingToChange === "length of observation sequence") {
            setLengthOfObservationSequence(newValue);
        } else if (typeOfSettingToChange.substring(0, 20) === "observation sequence") {
            setObservationSequence(newValue);
        }
    }

    const observationSequenceToFill = () => {
        let content = [];

        for (let i = 0; i < lengthOfObservationSequence; i++) {
            content.push(
                <div className={classes.UserExampleInputContainer}>
                    {i !== 0 ? <span style={{"marginLeft":"10px"}}></span> : null}
                    {utility.O(i)}{utility.blankSpace}=
                    <UserExampleInput 
                        typeOfSetting={`observation sequence ${i}`}
                        changeSettingsHandler = {changeSettingsHandler}
                        minValue = "0"
                        maxValue = {numberOfPossibleObservations}
                    />
                    {i !== lengthOfObservationSequence - 1 ? <span style={{"userSelect":"none"}}>{utility.blankSpace},</span> : null}
                </div>
            );
        }
        return content;
    }

    const changeMatrixValueHandler = (rowIndex, columnIndex, newValue, typeOfMatrix) => {
        if (typeOfMatrix === "A") {
            let copyOfOldAMatrix = [...exampleMatrixA];

            copyOfOldAMatrix[rowIndex][columnIndex] = newValue;

            setExampleMatrixA(copyOfOldAMatrix);
        } else if (typeOfMatrix === "B") {
            let copyOfOldBMatrix = [...exampleMatrixB];

            copyOfOldBMatrix[rowIndex][columnIndex] = newValue;

            setExampleMatrixB(copyOfOldBMatrix);
        }
    }

    return (
        <>
            <div className={classes.settings}>
                <b>Settings</b>

                <div className={classes.chooseExample}>
                    <ExampleType 
                        thisSettingIsSelected={whatExampleToUse === "Runner example"}
                        checkboxSelectedHandler={exampleTypeSelectedHandler}
                        exampleType = "Runner example"
                    />
                    <ExampleType 
                        thisSettingIsSelected={whatExampleToUse === "Weather example"}
                        checkboxSelectedHandler={exampleTypeSelectedHandler}
                        exampleType = "Weather example"
                    />
                        
                    <ExampleType 
                        thisSettingIsSelected={whatExampleToUse === "Your own example"}
                        checkboxSelectedHandler={exampleTypeSelectedHandler}
                        exampleType = "Your own example"
                    />
                </div>

                <div className={classes.horizontalLine} />

                <div className={classes.exampleSettings}>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>States (<i>max 7</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="states"
                            changeSettingsHandler = {changeSettingsHandler}
                            minValue = "1"
                            maxValue = "7"
                        />
                    </div>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>Observations (<i>max 7</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="observations"
                            changeSettingsHandler = {changeSettingsHandler}
                            minValue = "1"
                            maxValue = "7"
                        />
                    </div>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>Length of observation sequence (<i>max 7</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="length of observation sequence"
                            changeSettingsHandler = {changeSettingsHandler}
                            minValue = "1"
                            maxValue = "7"
                        />
                    </div>
                    
                    <div>Observation sequence (<i>input = observation index</i>):</div>
                    <div className={classes.UserExampleInputContainer}>
                        {observationSequenceToFill()}
                    </div>
                </div>

                <div className={classes.horizontalLine} />

                <div className={classes.matricesSettings}>
                    <ExampleTypeModification
                        thisSettingIsSelected={assignProbabilitiesForUser}
                        checkboxSelectedHandler={assignProbabilitiesHandler}
                        exampleType="Assign probabilities for me"
                    />

                    <InputMatrix 
                        matrixName = "A"
                        numberOfColumns = {numberOfStates}
                        numberOfRows = {numberOfStates}
                        matrix = {exampleMatrixA}
                        themeColor = "red"
                        changeMatrixValueHandler={changeMatrixValueHandler}
                    />
                </div>
            </div>

            <div className={classes.alphaVisualizer}>

            </div>
        </>
    )
}

export default PlayAroundWithExamples;