import React, {useState} from 'react';
import classes from './playAroundWithExamples.module.scss';

import * as utility from '../../Common/Utility/utility';

import ExampleType from './ExampleType/exampleType';
import ExampleTypeModification from './ExampleTypeModification/exampleTypeModification';
import UserExampleInput from './UserExampleInput/userExampleInput';
import InputMatrix from './InputMatrix/inputMatrix';
import InputVector from './InputVector/inputVector';

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

    const changeMatrixValueHandler = (i, j, newValue, typeOfMatrix) => {
        setWhatExampleToUse("Your own example");
        setAssignProbabilitiesForUser(false);

        if (typeOfMatrix === "A") {
            let copyOfOldAMatrix = utility.deepCopyFunction(exampleMatrixA);
            copyOfOldAMatrix[i][j] = newValue;
            setExampleMatrixA(copyOfOldAMatrix);
        } else if (typeOfMatrix === "B") {
            let copyOfOldBMatrix = utility.deepCopyFunction(exampleMatrixB);
            copyOfOldBMatrix[i][j] = newValue;
            setExampleMatrixB(copyOfOldBMatrix);
        }
    }

    const changeVectorValueHandler = (i, newValue, typeOfMatrix) => {
        setWhatExampleToUse("Your own example");
        setAssignProbabilitiesForUser(false);

        if (typeOfMatrix  == "pi") {
            let copyOfOldPiVector = utility.deepCopyFunction(exampleVectorPi);
            copyOfOldPiVector[i] = newValue;
            setExampleVectorPi(copyOfOldPiVector);
        }
    }

    const changeNumberOfStatesHandler = (_typeOfSetting, numberOfNewStates) => {
        const numberOfOldStates = parseInt(numberOfStates);
        const _numberOfNewStates = parseInt(numberOfNewStates);
        
        let newAMatrix = [];
        let newBMatrix = [];
        let newPiVector = new Array(_numberOfNewStates).fill(0);

        let oldAMatrix = utility.deepCopyFunction(exampleMatrixA);
        let oldBMatrix = utility.deepCopyFunction(exampleMatrixB);
        let oldPiVector = utility.deepCopyFunction(exampleVectorPi);

        for (let i = 0; i < _numberOfNewStates; i++) {
            newAMatrix.push(new Array(_numberOfNewStates).fill(0));
            newBMatrix.push(new Array(numberOfPossibleObservations).fill(0));
        }

        if (numberOfOldStates === _numberOfNewStates) {
            newAMatrix = oldAMatrix;
            newBMatrix = oldBMatrix;
            newPiVector = oldPiVector;

        } else if (numberOfOldStates < _numberOfNewStates) {
            for (let i = 0; i < numberOfOldStates; i++) {
                for (let j = 0; j < numberOfOldStates; j++) {
                    newAMatrix[i][j] = oldAMatrix[i][j];
                }

                for (let k = 0; k < numberOfPossibleObservations; k++) {
                    newBMatrix[i][k] = oldBMatrix[i][k];
                }

                newPiVector[i] = oldPiVector[i];
            }
        } else {
            for (let i = 0; i < _numberOfNewStates; i++) {
                for (let j = 0; j < _numberOfNewStates; j++) {
                    newAMatrix[i][j] = oldAMatrix[i][j];
                }

                for (let k = 0; k < numberOfPossibleObservations; k++) {
                    newBMatrix[i][k] = oldBMatrix[i][k]
                }

                newPiVector[i] = oldPiVector[i];
            }
        }

        setNumberOfStates(_numberOfNewStates);
        setExampleMatrixA(newAMatrix);
        setExampleMatrixB(newBMatrix);
        setExampleVectorPi(newPiVector);
        setAssignProbabilitiesForUser(false);
        setWhatExampleToUse("Your own example");
    }

    const changeNumberOfObservationsHandler = (_typeOfSetting, numberOfNewObservations) => {
        let newBMatrix = [];
        let oldBMatrix = utility.deepCopyFunction(exampleMatrixB);

        const numberOfOldObservations = parseInt(numberOfPossibleObservations);
        const _numberOfNewObservations = parseInt(numberOfNewObservations);

        for (let i = 0; i < numberOfStates; i++) {
            newBMatrix.push(new Array(_numberOfNewObservations).fill(0));
        }

        let oldValue;
        if (numberOfOldObservations === _numberOfNewObservations) {
            newBMatrix = oldBMatrix;

        } else if (numberOfOldObservations < _numberOfNewObservations) {
            for (let i = 0; i < numberOfStates; i++) {
                for (let k = 0; k < numberOfOldObservations; k++) {
                    oldValue = oldBMatrix[i][k];
                    newBMatrix[i][k] = oldValue;
                }
            }
        } else {
            for (let i = 0; i < numberOfStates; i++) {
                for (let k = 0; k < _numberOfNewObservations; k++) {
                    oldValue = oldBMatrix[i][k];
                    newBMatrix[i][k] = oldValue;
                }
            }
        }

        setNumberOfPossibleObservations(_numberOfNewObservations);
        setExampleMatrixB(newBMatrix);
        setAssignProbabilitiesForUser(false);
        setWhatExampleToUse("Your own example");
    }

    const changeLengthOfObservationSequenceHandler = (_typeOfSetting, newLengthOfObservationSequence) => {
        let oldObservationSequence = utility.deepCopyFunction(observationSequence);
        let newObservationSequence = new Array(newLengthOfObservationSequence).fill(0);
        
        const oldLengthOfObservationSequence = parseInt(lengthOfObservationSequence);
        
        let oldValue;

        if (oldLengthOfObservationSequence === newLengthOfObservationSequence) {
            newObservationSequence = oldObservationSequence;
        } else if (oldLengthOfObservationSequence < newLengthOfObservationSequence) {
            for (let i = 0; i < oldLengthOfObservationSequence; i++) {
                oldValue = oldObservationSequence[i];
                newObservationSequence[i] = oldValue;
            }
        } else {
            for (let i = 0; i < newLengthOfObservationSequence; i++) {
                oldValue = oldObservationSequence[i];
                newObservationSequence[i] = oldValue;
            }
        }

        setObservationSequence(newObservationSequence);
        setLengthOfObservationSequence(newLengthOfObservationSequence);
        setWhatExampleToUse("Your own example");
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
                            changeSettingsHandler = {changeNumberOfObservationsHandler}
                            minValue = "1"
                            maxValue = "7"
                            value = {numberOfPossibleObservations}
                        />
                    </div>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>Length of observation sequence (<i>max 7</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="length of observation sequence"
                            changeSettingsHandler = {changeLengthOfObservationSequenceHandler}
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

                    <InputMatrix 
                        matrixName = "B"
                        numberOfColumns = {numberOfPossibleObservations}
                        numberOfRows = {numberOfStates}
                        matrix = {exampleMatrixB}
                        themeColor = "blue"
                        changeMatrixValueHandler={changeMatrixValueHandler}
                    />

                    <InputVector 
                        vectorName = "pi"
                        numberOfColumns = {numberOfStates}
                        vector = {exampleVectorPi}
                        themeColor = "green"
                        changeVectorValueHandler={changeVectorValueHandler}
                    />
                </div>
            </div>

            <div className={classes.alphaVisualizer}>

            </div>
        </>
    )
}

export default PlayAroundWithExamples;