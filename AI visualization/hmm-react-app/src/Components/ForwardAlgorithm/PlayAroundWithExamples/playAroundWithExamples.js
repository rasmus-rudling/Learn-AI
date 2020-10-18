import React, {useState} from 'react';
import classes from './playAroundWithExamples.module.scss';

import * as utility from '../../Common/Utility/utility';

import ExampleType from './ExampleType/exampleType';
import ExampleTypeModification from './ExampleTypeModification/exampleTypeModification';
import UserExampleInput from './UserExampleInput/userExampleInput';
import InputMatrix from './InputMatrix/inputMatrix';

const PlayAroundWithExamples = (props) => {
    const [whatExampleToUse, setWhatExampleToUse] = useState("Runner example");
    const [exampleMatrixA, setExampleMatrixA] = useState(utility.deepCopyFunction(utility.runnerAMatrix));
    const [exampleMatrixB, setExampleMatrixB] = useState(utility.deepCopyFunction(utility.runnerBMatrix));
    const [exampleVectorPi, setExampleVectorPi] = useState(utility.deepCopyFunction(utility.runnerPiVector));
    const [numberOfStates, setNumberOfStates] = useState(utility.runnerAMatrix.length);
    const [numberOfPossibleObservations, setNumberOfPossibleObservations] = useState(utility.runnerBMatrix[0].length);
    const [lengthOfObservationSequence, setLengthOfObservationSequence] = useState(utility.runnerObservationSequence.length)
    const [observationSequence, setObservationSequence] = useState(utility.deepCopyFunction(utility.runnerObservationSequence));
    const [assignProbabilitiesForUser, setAssignProbabilitiesForUser] = useState(true);

    const exampleTypeSelectedHandler = (newExampleTypeToUse) => {
        setWhatExampleToUse(newExampleTypeToUse);

        if (newExampleTypeToUse == "Runner example") {
            setAssignProbabilitiesForUser(true);
            setExampleMatrixA(utility.deepCopyFunction(utility.runnerAMatrix));
            setExampleMatrixB(utility.deepCopyFunction(utility.runnerBMatrix));
            setExampleVectorPi(utility.deepCopyFunction(utility.runnerPiVector));
            setNumberOfStates(utility.runnerAMatrix.length);
            setNumberOfPossibleObservations(utility.runnerBMatrix[0].length);
            setLengthOfObservationSequence(utility.runnerObservationSequence.length);
            setObservationSequence(utility.deepCopyFunction(utility.runnerObservationSequence));
        } else if (newExampleTypeToUse == "Weather example") {
            setAssignProbabilitiesForUser(true);
            setExampleMatrixA(utility.deepCopyFunction(utility.weatherAMatrix));
            setExampleMatrixB(utility.deepCopyFunction(utility.weatherBMatrix));
            setExampleVectorPi(utility.deepCopyFunction(utility.weatherPiVector));
            setNumberOfStates(utility.weatherAMatrix.length);
            setNumberOfPossibleObservations(utility.weatherBMatrix[0].length);
            setLengthOfObservationSequence(utility.weatherObservationSequence.length);
            setObservationSequence(utility.deepCopyFunction(utility.weatherObservationSequence));
        } else if (newExampleTypeToUse == "Your own example") {
            setAssignProbabilitiesForUser(false);

            let copyOfOldAMatrix = utility.deepCopyFunction(exampleMatrixA);
            let copyOfOldBMatrix = utility.deepCopyFunction(exampleMatrixB);
            
            for (let i = 0; i < numberOfStates; i++) {
                for (let j = 0; j < numberOfStates; j++) {
                    copyOfOldAMatrix[i][j] = 0;
                }
            }

            for (let j = 0; j < numberOfStates; j++) {
                for (let k = 0; k < numberOfPossibleObservations; k++) {
                    copyOfOldBMatrix[j][k] = 0;
                }
            }
                
            setExampleMatrixA(copyOfOldAMatrix);
            setExampleMatrixB(copyOfOldBMatrix);
        }
    }

    const assignProbabilitiesHandler = () => {
        setAssignProbabilitiesForUser(!assignProbabilitiesForUser);
    }

    const changeSettingsHandler = (typeOfSettingToChange, newValue) => {
        if (typeOfSettingToChange === "observations") {
            setNumberOfPossibleObservations(newValue);
        } else if (typeOfSettingToChange === "length of observation sequence") {
            setLengthOfObservationSequence(newValue);
        }
        setWhatExampleToUse("Your own example");
    }

    const changeObservationSequenceHandler = (typeOfSettingToChange, newValue) => {
        setWhatExampleToUse("Your own example");
        let timeStep = typeOfSettingToChange.slice(-1);
        let copyOfObservationSequence = utility.deepCopyFunction(observationSequence);

        copyOfObservationSequence[timeStep] = newValue;

        setObservationSequence(copyOfObservationSequence);
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
                        changeSettingsHandler = {changeObservationSequenceHandler}
                        minValue = "0"
                        maxValue = {numberOfPossibleObservations}
                        value = {observationSequence[i]}
                    />
                    {i !== lengthOfObservationSequence - 1 ? <span style={{"userSelect":"none"}}>{utility.blankSpace},</span> : null}
                </div>
            );
        }
        return content;
    }

    const changeMatrixValueHandler = (rowIndex, columnIndex, newValue, typeOfMatrix) => {
        setWhatExampleToUse("Your own example");
        setAssignProbabilitiesForUser(false);

        if (typeOfMatrix === "A") {
            let copyOfOldAMatrix = utility.deepCopyFunction(exampleMatrixA);
            
            copyOfOldAMatrix[rowIndex][columnIndex] = newValue;
            setExampleMatrixA(copyOfOldAMatrix);
        } else if (typeOfMatrix === "B") {
            let copyOfOldBMatrix = [...exampleMatrixB];

            copyOfOldBMatrix[rowIndex][columnIndex] = newValue;

            setExampleMatrixB(copyOfOldBMatrix);
        }
    }

    const changeNumberOfStatesHandler = (_typeOfSetting, numberOfNewStates) => {
        let newAMatrix = [];
        let oldAMatrix = [...exampleMatrixA];
        setWhatExampleToUse("Your own example");

        const numberOfOldStates = parseInt(numberOfStates);
        const _numberOfNewStates = parseInt(numberOfNewStates);

        for (let i = 0; i < _numberOfNewStates; i++) {
            newAMatrix.push(new Array(_numberOfNewStates).fill(0));
        }

        let oldValue;
        if (numberOfOldStates === _numberOfNewStates) {
            newAMatrix = oldAMatrix;
        } else if (numberOfOldStates < _numberOfNewStates) {
            for (let rowIndex = 0; rowIndex < numberOfOldStates; rowIndex++) {
                for (let columnIndex = 0; columnIndex < numberOfOldStates; columnIndex++) {
                    oldValue = oldAMatrix[rowIndex][columnIndex];
                    newAMatrix[rowIndex][columnIndex] = oldValue;
                }
            }
        } else {
            for (let rowIndex = 0; rowIndex < _numberOfNewStates; rowIndex++) {
                for (let columnIndex = 0; columnIndex < _numberOfNewStates; columnIndex++) {
                    newAMatrix[rowIndex][columnIndex] = oldAMatrix[rowIndex][columnIndex];
                }
            }
        }


        setNumberOfStates(_numberOfNewStates);
        setExampleMatrixA(newAMatrix);
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
                            changeSettingsHandler = {changeNumberOfStatesHandler}
                            minValue = "1"
                            maxValue = "7"
                            value = {numberOfStates}
                        />
                    </div>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>Observations (<i>max 7</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="observations"
                            changeSettingsHandler = {changeSettingsHandler}
                            minValue = "1"
                            maxValue = "7"
                            value = {numberOfPossibleObservations}
                        />
                    </div>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>Length of observation sequence (<i>max 7</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="length of observation sequence"
                            changeSettingsHandler = {changeSettingsHandler}
                            minValue = "1"
                            maxValue = "7"
                            value = {lengthOfObservationSequence}
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