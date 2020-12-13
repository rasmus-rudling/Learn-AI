import React, { useEffect, useState } from 'react';
import classes from './playAroundWithExamples.module.scss';

import * as utility from '../../../Common/utility';

import thumb from '../../../../Resources/Icons/thumb.svg';

import ExampleType from './ExampleType/exampleType';
import ExampleTypeModification from './ExampleTypeModification/exampleTypeModification';
import UserExampleInput from './UserExampleInput/userExampleInput';
import InputMatrix from './InputMatrix/inputMatrix';
import InputVector from './InputVector/inputVector';

const PlayAroundWithExamples = (props) => {
    const initADict = {0:1, 1:1, 2:1, 3:0};
    const initBDict = {0:1, 1:1, 2:1, 3:1};

    const [whatExampleToUse, setWhatExampleToUse] = useState("Runner example");
    const [exampleMatrixA, setExampleMatrixA] = useState(utility.deepCopyFunction(utility.runnerAMatrix));
    const [exampleMatrixB, setExampleMatrixB] = useState(utility.deepCopyFunction(utility.runnerBMatrix));
    const [exampleVectorPi, setExampleVectorPi] = useState(utility.deepCopyFunction(utility.runnerPiVector));
    const [numberOfStates, setNumberOfStates] = useState(utility.runnerAMatrix.length);
    const [numberOfPossibleObservations, setNumberOfPossibleObservations] = useState(utility.runnerBMatrix[0].length);
    const [lengthOfObservationSequence, setLengthOfObservationSequence] = useState(utility.runnerObservationSequence.length)
    const [observationSequence, setObservationSequence] = useState(utility.deepCopyFunction(utility.runnerObservationSequence));
    const [assignProbabilitiesForUser, setAssignProbabilitiesForUser] = useState(false);

    const [aMatrixFullyRowStochastic, setAMatrixFullyRowStochastic] = useState(false);
    const [aMatrixRowStochastic, setAMatrixRowStochastic] = useState(true);
    const [bMatrixFullyRowStochastic, setBMatrixFullyRowStochastic] = useState(true);
    const [piVectorFullyRowStochastic, setPiVectorFullyRowStochastic] = useState(true);

    const [exampleVectorAlpha, setExampleVectorAlpha] = useState(utility.runnerAlphaVector);
    const [alphaToShow, setAlphaToShow] = useState(0);

    const [stochasticRowsInA, setStochasticRowsInA] = useState(initADict);
    const [stochasticRowsInB, setStochasticRowsInB] = useState(initBDict);

    const exampleTypeSelectedHandler = (newExampleTypeToUse) => {
        setWhatExampleToUse(newExampleTypeToUse);

        if (newExampleTypeToUse == "Runner example") {
            setAssignProbabilitiesForUser(true);
            setExampleMatrixA(utility.deepCopyFunction(utility.runnerAMatrix));
            setExampleMatrixB(utility.deepCopyFunction(utility.runnerBMatrix));
            setExampleVectorPi(utility.deepCopyFunction(utility.runnerPiVector));
            setExampleVectorAlpha(utility.runnerAlphaVector);

            setNumberOfStates(utility.runnerAMatrix.length);
            setNumberOfPossibleObservations(utility.runnerBMatrix[0].length);
            setLengthOfObservationSequence(utility.runnerObservationSequence.length);
            setObservationSequence(utility.deepCopyFunction(utility.runnerObservationSequence));

            checkMatrixRowStochasticHandler("A", utility.runnerAMatrix);
            checkMatrixRowStochasticHandler("B", utility.runnerBMatrix);
            checkVectorRowStochasticHandler("pi", utility.runnerPiVector);

            if (alphaToShow > utility.runnerObservationSequence.length - 1) {
                setAlphaToShow(utility.runnerObservationSequence.length - 1);
            }

        } else if (newExampleTypeToUse == "Weather example") {
            setAssignProbabilitiesForUser(true);
            setExampleMatrixA(utility.deepCopyFunction(utility.weatherAMatrix));
            setExampleMatrixB(utility.deepCopyFunction(utility.weatherBMatrix));
            setExampleVectorPi(utility.deepCopyFunction(utility.weatherPiVector));
            setExampleVectorAlpha(utility.weatherAlphaVector);

            setNumberOfStates(utility.weatherAMatrix.length);
            setNumberOfPossibleObservations(utility.weatherBMatrix[0].length);
            setLengthOfObservationSequence(utility.weatherObservationSequence.length);
            setObservationSequence(utility.deepCopyFunction(utility.weatherObservationSequence));

            checkMatrixRowStochasticHandler("A", utility.weatherAMatrix);
            checkMatrixRowStochasticHandler("B", utility.weatherBMatrix);
            checkVectorRowStochasticHandler("pi", utility.weatherPiVector);

            if (alphaToShow > utility.weatherObservationSequence.length - 1) {
                setAlphaToShow(utility.weatherObservationSequence.length - 1);
            }
        } else if (newExampleTypeToUse == "Your own example") {
            setAssignProbabilitiesForUser(false);

            let copyOfOldAMatrix = utility.deepCopyFunction(exampleMatrixA);
            let copyOfOldBMatrix = utility.deepCopyFunction(exampleMatrixB);
            let copyOfOldPiVector = utility.deepCopyFunction(exampleVectorPi);
            
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

            for (let i = 0; i < numberOfStates; i++) {
                copyOfOldPiVector[i] = 0;
            }
                
            setExampleMatrixA(copyOfOldAMatrix);
            setExampleMatrixB(copyOfOldBMatrix);
            setExampleVectorPi(copyOfOldPiVector);

            checkMatrixRowStochasticHandler("A", copyOfOldAMatrix);
            checkMatrixRowStochasticHandler("B", copyOfOldBMatrix);
            checkVectorRowStochasticHandler("pi", copyOfOldPiVector);
        }
    }

    const assignProbabilitiesHandler = () => {
        if (!assignProbabilitiesForUser) {
            let randomLambda = utility.randomInitialization(numberOfStates, numberOfPossibleObservations);

            let newA = randomLambda[0];
            let newB = randomLambda[1];
            let newPi = randomLambda[2];

            let newAlphaVector = utility.forward_algorithm(newA, newB, newPi, observationSequence);
            setExampleVectorAlpha(newAlphaVector);

            setExampleMatrixA(newA);
            setExampleMatrixB(newB);
            setExampleVectorPi(newPi);

            checkMatrixRowStochasticHandler("A", newA);
            checkMatrixRowStochasticHandler("B", newB);
            checkVectorRowStochasticHandler("pi", newPi);
            
            setWhatExampleToUse("Your own example");
        }
        
        setAssignProbabilitiesForUser(!assignProbabilitiesForUser);
    }

    const changeObservationSequenceHandler = (typeOfSettingToChange, newValue) => {
        setWhatExampleToUse("Your own example");
        let timeStep = typeOfSettingToChange.slice(-1);
        let copyOfObservationSequence = utility.deepCopyFunction(observationSequence);

        copyOfObservationSequence[timeStep] = newValue;

        let newAlphaVector = utility.forward_algorithm(exampleMatrixA, exampleMatrixB, exampleVectorPi, copyOfObservationSequence);
        setExampleVectorAlpha(newAlphaVector);

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
                        maxValue = {numberOfPossibleObservations - 1}
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
            let newAlphaVector = utility.forward_algorithm(copyOfOldAMatrix, exampleMatrixB, exampleVectorPi, observationSequence);
            
            setExampleVectorAlpha(newAlphaVector);
            setExampleMatrixA(copyOfOldAMatrix);
        } else if (typeOfMatrix === "B") {
            let copyOfOldBMatrix = utility.deepCopyFunction(exampleMatrixB);
            copyOfOldBMatrix[i][j] = newValue;
            let newAlphaVector = utility.forward_algorithm(exampleMatrixA, copyOfOldBMatrix, exampleVectorPi, observationSequence);
            
            setExampleVectorAlpha(newAlphaVector);
            setExampleMatrixB(copyOfOldBMatrix);
        }
    }

    const changeVectorValueHandler = (i, newValue, typeOfMatrix) => {
        setWhatExampleToUse("Your own example");
        setAssignProbabilitiesForUser(false);

        if (typeOfMatrix  === "pi") {
            let copyOfOldPiVector = utility.deepCopyFunction(exampleVectorPi);
            copyOfOldPiVector[i] = newValue;
            
            let newAlphaVector = utility.forward_algorithm(exampleMatrixA, exampleMatrixB, copyOfOldPiVector, observationSequence);
            setExampleVectorAlpha(newAlphaVector);

            setExampleVectorPi(copyOfOldPiVector);
        }
    }

    const checkVectorRowStochasticHandler = (typeOfVector, vectorToCheck) => {
        let newVectorIsFullyRowStochastic, newVector;

        if (typeOfVector === "pi") {
            if (vectorToCheck !== undefined) {
                newVector = vectorToCheck;
            } else {
                newVector = exampleVectorPi;
            }
            
            newVectorIsFullyRowStochastic = utility.vectorIsRowStochastic(newVector) === 1;
            
            setPiVectorFullyRowStochastic(newVectorIsFullyRowStochastic);
        }
    }

    const checkMatrixRowStochasticHandler = (typeOfMatrix, matrixToCheck) => {
        let newMatrixIsFullyRowStochastic, newMatrixIsRowStochastic, newMatrix, rowStochasticResult;

        if (typeOfMatrix === "A") {
            if (matrixToCheck !== undefined) {
                newMatrix = matrixToCheck;
            } else {
                newMatrix = exampleMatrixA;
            }
            rowStochasticResult = utility.matrixIsRowStochastic(newMatrix);
            newMatrixIsFullyRowStochastic = rowStochasticResult[0] === 1;
            newMatrixIsRowStochastic = rowStochasticResult[0] === 0;

            setStochasticRowsInA(rowStochasticResult[1]);
            setAMatrixFullyRowStochastic(newMatrixIsFullyRowStochastic);
            setAMatrixRowStochastic(newMatrixIsRowStochastic);
        } else if (typeOfMatrix === "B") {
            if (matrixToCheck !== undefined) {
                newMatrix = matrixToCheck;
            } else {
                newMatrix = exampleMatrixB;
            }

            rowStochasticResult = utility.matrixIsRowStochastic(newMatrix);
            newMatrixIsFullyRowStochastic = rowStochasticResult[0] === 1;
            newMatrixIsRowStochastic = rowStochasticResult[0] === 0;

            setStochasticRowsInB(rowStochasticResult[1]);
            setBMatrixFullyRowStochastic(newMatrixIsFullyRowStochastic);
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

        checkMatrixRowStochasticHandler("A", newAMatrix);
        checkMatrixRowStochasticHandler("B", newBMatrix);
        checkVectorRowStochasticHandler("pi", newPiVector);

        let newAlphaVector = utility.forward_algorithm(newAMatrix, newBMatrix, newPiVector, observationSequence);
        setExampleVectorAlpha(newAlphaVector);
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

        checkMatrixRowStochasticHandler("B", newBMatrix);

        let newAlphaVector = utility.forward_algorithm(exampleMatrixA, newBMatrix, exampleVectorPi, observationSequence);
        setExampleVectorAlpha(newAlphaVector);
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

        let newAlphaVector = utility.forward_algorithm(exampleMatrixA, exampleMatrixB, exampleVectorPi, newObservationSequence);
        setExampleVectorAlpha(newAlphaVector);
    }

    let aMatrixMessageClass, aMatrixMessage,
        bMatrixMessageClass, bMatrixMessage,
        piVectorMessageClass, piVectorMessage;

    if (aMatrixRowStochastic) {
        aMatrixMessageClass = classes.greenMessage;
        aMatrixMessage = <span><i>The transition matrix {utility.A()} is row stochastic (except for the non-emitting state row(s))!</i></span>;
    } else if (aMatrixFullyRowStochastic) {
        aMatrixMessageClass = classes.greenMessage;
        aMatrixMessage = <span>The transition matrix {utility.A()} is row stochastic!</span>;
    } else {
        aMatrixMessageClass = classes.redMessage;
        aMatrixMessage = <span>The transition matrix {utility.A()} is not row stochastic!</span>;
    }

    if (bMatrixFullyRowStochastic) {
        bMatrixMessageClass = classes.greenMessage;
        bMatrixMessage = <span><i>The emission matrix {utility.B()} is row stochastic!</i></span>;
    } else {
        bMatrixMessageClass = classes.redMessage;
        bMatrixMessage = <span>The emission matrix {utility.B()} is not row stochastic!</span>;
    }

    if (piVectorFullyRowStochastic) {
        piVectorMessageClass = classes.greenMessage;
        piVectorMessage = <span>The initial state distribution {utility.pi()} is row stochastic!</span>;
    } else {
        piVectorMessageClass = classes.redMessage;
        piVectorMessage = <span>The initial state distribution {utility.pi()} is not row stochastic!</span>;
    }

    let alphaVectorCorrect = (aMatrixFullyRowStochastic || aMatrixRowStochastic) && bMatrixFullyRowStochastic && piVectorFullyRowStochastic;

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
                            minValue = "2"
                            maxValue = "7"
                            value = {numberOfStates}
                        />
                    </div>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>Observations (<i>max 7</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="observations"
                            changeSettingsHandler = {changeNumberOfObservationsHandler}
                            minValue = "2"
                            maxValue = "7"
                            value = {numberOfPossibleObservations}
                        />
                    </div>
                    
                    <div className={classes.UserExampleInputContainer}>
                        <div>Length of observation sequence (<i>max 9</i>):</div>
                        <UserExampleInput 
                            typeOfSetting="length of observation sequence"
                            changeSettingsHandler = {changeLengthOfObservationSequenceHandler}
                            minValue = "1"
                            maxValue = "9"
                            value = {lengthOfObservationSequence}
                        />
                    </div>
                    
                    <p>Observation sequence (<i>input = observation index</i>):</p>
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
                        checkMatrixRowStochasticHandler = {checkMatrixRowStochasticHandler}
                        stochasticRows={stochasticRowsInA}
                    />

                    <p className={aMatrixMessageClass}>
                        {aMatrixMessage} <img src={thumb} /> 
                    </p>

                    <InputMatrix 
                        matrixName = "B"
                        numberOfColumns = {numberOfPossibleObservations}
                        numberOfRows = {numberOfStates}
                        matrix = {exampleMatrixB}
                        themeColor = "blue"
                        changeMatrixValueHandler={changeMatrixValueHandler}
                        checkMatrixRowStochasticHandler = {checkMatrixRowStochasticHandler}
                        stochasticRows={stochasticRowsInB}
                    />

                    <p className={bMatrixMessageClass}>
                        {bMatrixMessage} <img src={thumb} />
                    </p>

                    <InputVector 
                        vectorName = "pi"
                        numberOfColumns = {numberOfStates}
                        vector = {exampleVectorPi}
                        themeColor = "green"
                        changeVectorValueHandler={changeVectorValueHandler}
                        checkVectorRowStochasticHandler = {checkVectorRowStochasticHandler}
                        vectorStochastic = {piVectorFullyRowStochastic}
                    />
                    <p className={piVectorMessageClass}>
                        {piVectorMessage} <img src={thumb} />
                    </p>
                </div>
            </div>

            <div className={classes.alphaVisualizer}>

                <div 
                    className={classes.iterButton} 
                    style={{"marginRight":"10px"}}
                    onClick = {() => {
                        if (alphaToShow > 0) {
                            setAlphaToShow(alphaToShow - 1)
                        } 
                    }}
                >
                    &laquo; Previous
                </div>
                <InputVector 
                    vectorName = {`alpha_${alphaToShow}`}
                    numberOfColumns = {numberOfStates}
                    vector = {exampleVectorAlpha[alphaToShow].map(val => {
                        if (val > 0.0001 || val === 0) {
                            return utility.roundTo(val, 5);
                        } else {
                            return val.toExponential(1);
                        }
                    })}
                    
                    themeColor = "orange"
                    changeVectorValueHandler={() => console.log()}
                    checkVectorRowStochasticHandler = {() => console.log()}
                    vectorStochastic = {alphaVectorCorrect}
                />
                <div 
                    className={classes.iterButton} 
                    style={{"marginLeft":"10px"}}
                    onClick = {() => {
                        if (alphaToShow < exampleVectorAlpha.length - 1) {
                            setAlphaToShow(alphaToShow + 1)
                        } 
                    }}
                    
                >
                    Next &raquo;
                </div>
            </div>
        </>
    )
}

export default PlayAroundWithExamples;