import React from 'react';

// --- Weather example imports ---
import weatherS0 from '../../../Resources/weather/weatherState0.svg';
import weatherS1 from '../../../Resources/weather/weatherState1.svg';
import weatherS2 from '../../../Resources/weather/weatherState2.svg';
import weatherO0 from '../../../Resources/weather/weatherObservation0.svg';
import weatherO1 from '../../../Resources/weather/weatherObservation1.svg';
import weatherO2 from '../../../Resources/weather/weatherObservation2.svg';
import weatherO3 from '../../../Resources/weather/weatherObservation3.svg';
import weatherO4 from '../../../Resources/weather/weatherObservation4.svg';

// --- Runner example imports ---
import runnerS0 from '../../../Resources/runner/runnerState0.svg';
import runnerS1 from '../../../Resources/runner/runnerState1.svg';
import runnerS2 from '../../../Resources/runner/runnerState2.svg';
import runnerS3 from '../../../Resources/runner/runnerState3.svg';
import runnerO0 from '../../../Resources/runner/runnerObservation0.png';
import runnerO1 from '../../../Resources/runner/runnerObservation1.png';
import runnerO2 from '../../../Resources/runner/runnerObservation2.png';
import runnerO3 from '../../../Resources/runner/runnerObservation3.png';
import runnerO4 from '../../../Resources/runner/runnerObservation4.png';
import runnerO5 from '../../../Resources/runner/runnerObservation5.png';

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


export const roundTo = (num, numberOfDecimals) => Math.round((num + Number.EPSILON) * (10 ** numberOfDecimals)) / (10 ** numberOfDecimals);

export const lambda = (x) => <span style={{"color":"#E967E0"}}>λ<sub style={{"color":"#E967E0"}}>{x}</sub></span>;

export const pi = (x) => <span style={{"color":"#6EC668"}}>π<sub style={{"color":"#6EC668"}}>{x}</sub></span>;
export const pi_alone = () => <span style={{"color":"#6EC668"}}>π</span>;
export const pi_parenthesis = (inside) => <span style={{"color":"#6EC668"}}>π(<span style={{"color":"#2d2d2d"}}>{inside}</span>)</span>;

export const A = (x) => <span style={{"color":"#E95252"}}>A<sub style={{"color":"#E95252"}}>{x}</sub></span>;
export const a = (x) => <span style={{"color":"#E95252"}}>a<sub style={{"color":"#E95252"}}>{x}</sub></span>;
export const a_alone = () => <span style={{"color":"#E95252"}}>a</span>;

export const B = (x) => <span style={{"color":"#43AFCA"}}>B<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;

export const b = (x) => <span style={{"color":"#43AFCA"}}>b<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;
export const b_alone = () => <span style={{"color":"#43AFCA"}}>b</span>;
export const b_parenthesis = (sub, inside) => <span style={{"color":"#43AFCA"}}>b<sub style={{"color":"#43AFCA"}}>{sub}</sub>({inside})</span>;

export const t = (x) => <span style={{"color":"#2d2d2d"}}>t<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;

export const O = (x) => <span style={{"color":"#43AFCA"}}>O<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;
export const O_black = (x) => <span style={{"color":"#2d2d2d"}}>O<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;

export const S = (x) => <span style={{"color":"#E95252"}}>S<sub style={{"color":"#E95252"}}>{x}</sub></span>;
export const S_alone = () => <span><b style={{"color":"#E95252"}}>S</b></span>;
export const S_black = (x) => <span style={{"color":"#2d2d2d"}}>S<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;

export const alpha_orange = (sub, inside) => {
    return (
        <div style={{"color":"#FFA500", "display":"inline"}}>
            α
            <sub style={{"color":"#FFA500"}}>{sub}</sub>
            (<span style={{"color":"#2d2d2d"}} >{inside}</span>)
        </div>

    )
}

// --- PSEUDOCODE ---
export const pseudo_variable = (variable) => <span style={{"color":"#2CEC93", "fontWeight":"600"}}>{variable}</span>;


export const alpha_without_parenthesis = (x) => <span style={{"color":"#FFA500"}}>α<sub style={{"color":"#FFA500"}}>{x}</sub></span>;

export const curlyLeft = <span>{"{"}</span>;
export const curlyRight = <span>{"}"}</span>;
export const multiply = <span style={{"fontWeight":"300"}}>×</span>
export const blankSpace = <span>&nbsp;</span>

export const brackets = (content, contentColor, bracketColor) => {
    let _bracketColor, _contentColor;

    if (bracketColor === "green") {
        _bracketColor = "#6EC668";
    } else if (bracketColor === "red") {
        _bracketColor = "#E95252";
    } else if (bracketColor === "blue") {
        _bracketColor = "#43AFCA";
    } else if (bracketColor === "black") {
        _bracketColor = "#2d2d2d";
    }

    if (contentColor === "green") {
        _contentColor = "#6EC668";
    } else if (contentColor === "red") {
        _contentColor = "#E95252";
    } else if (contentColor === "blue") {
        _contentColor = "#43AFCA";
    } else if (contentColor === "black") {
        _contentColor = "#2d2d2d";
    }

    return <span>
        <span style={{"color":_bracketColor}}>[</span>
        <span style={{"color":_contentColor}}>{content}</span>
        <span style={{"color":_bracketColor}}>]</span>
    </span>
}

export const imageInText = (image) => {
    return (
        <div style={{
            "margin":"0px 1px 0 1px",
            "display":"inline",
            "justifyContent":"center"
        }}>
            <img src={image} alt=" " style={{"height":"14px", "position":"relative", "top":"1.5px"}}/>
        </div>
    )
}

export const getRandomInInterval = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const randomInitialization = (numberOfStates, numberOfObservations) => {
    let pi = new Array(numberOfStates).fill(0);
    let A = [];
    let B = [];
    let roundNr = 5;

    let uniformStateProb = 1 / numberOfStates;
    let uniformObservationProb = 1 / numberOfObservations;

    let randomThreshold = 0.03;
    let lastIndex;

    for (let i = 0; i < numberOfStates; i++) {
        if (i < numberOfStates - 1) {
            pi[i] = roundTo(uniformStateProb + getRandomInInterval(-randomThreshold, randomThreshold), roundNr);
        }

        A.push(new Array(numberOfStates).fill(0));
        for (let j = 0; j < numberOfStates-1; j++) {
            A[i][j] = roundTo(uniformStateProb + getRandomInInterval(-randomThreshold, randomThreshold), roundNr);
        }

        lastIndex = A[i].length - 1;
        A[i][lastIndex] = roundTo(1 - A[i].reduce((accumulator, currentValue) => accumulator + currentValue), roundNr);

        B.push(new Array(numberOfObservations).fill(0));
        for (let j = 0; j < numberOfObservations - 1; j++) {
            B[i][j] = roundTo(uniformObservationProb + getRandomInInterval(-randomThreshold, randomThreshold), roundNr);
        }

        lastIndex = B[i].length - 1;
        B[i][lastIndex] = roundTo(1 - B[i].reduce((accumulator, currentValue) => accumulator + currentValue), roundNr);
    }

    lastIndex = pi.length - 1;
    pi[lastIndex] = roundTo(1 - pi.reduce((accumulator, currentValue) => accumulator + currentValue), roundNr);
    let lambda = [A, B, pi];

    return lambda;
}


export const forward_algorithm = (A, B, pi, o_seq) => {
    const numberOfStates = A.length;
    const numberOfTimeSteps = o_seq.length;
    let alpha_vector = new Array(numberOfTimeSteps).fill([]);;

    // Calculate α0
    const observation_0 = o_seq[0]
    let alpha_0 = new Array(numberOfStates).fill(0);

    for (let i = 0; i < numberOfStates; i++) {
            alpha_0[i] = pi[i] * B[i][observation_0];
    }

    alpha_vector[0] = alpha_0; 

    // Calculate α1, α2, …, αT-1
    let observation_t, previous_alpha, alpha_t, sum;

    for (let t = 1; t < numberOfTimeSteps; t++) {
        observation_t = o_seq[t];
        previous_alpha = alpha_vector[t-1];

        alpha_t = new Array(numberOfStates).fill(0);

        for (let i = 0; i < numberOfStates; i++) {
            sum = 0

            for (let j = 0; j < numberOfStates; j++) {
                sum += previous_alpha[j] * A[j][i];
            }

            alpha_t[i] = sum * B[i][observation_t]
        }
        alpha_vector[t] = alpha_t; 
    }

    return alpha_vector;
}

const calculateTotalSumForEachAlpha = (alpha_vector) => {
    let alpha_sums = new Array(alpha_vector.length).fill(0);

    for (let t = 0; t < alpha_vector.length; t++) {
        for (let stateIndex = 0; stateIndex < alpha_vector[t].length; stateIndex++) {
            alpha_sums[t] += alpha_vector[t][stateIndex];
        }
    }

    return alpha_sums;
}

export const weatherAlphaVector = forward_algorithm(weatherAMatrix, weatherBMatrix, weatherPiVector, weatherObservationSequence);
export const runnerAlphaVector = forward_algorithm(runnerAMatrix, runnerBMatrix, runnerPiVector, runnerObservationSequence);

export const weatherAlphaSums = calculateTotalSumForEachAlpha(weatherAlphaVector);
export const runnerAlphaSums = calculateTotalSumForEachAlpha(runnerAlphaVector);


export const replaceCharAt = (str, index, replacement) => {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

export const addCharAfter = (str, index, newChar) => {
    return str.substr(0, index + 1) + newChar + str.substr(index + 1);
}

export const getSelectionRange = () => {
    let sel;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    } else if (document.selection) {
        return document.selection.createRange();
    }
    return null;
}


export const deepCopyFunction = (inObject) => {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
}


export const matrixIsRowStochastic = inputMatrix => {
    let numberOfRows = inputMatrix.length;
    let numberOfColumns = inputMatrix[0].length;
    let rowSum, addToSum;
    let totalSum = 0;
    let numberOfZeroRows = 0;
    let stochasticDict = {};

    for (let i = 0; i < numberOfRows; i++) {
        rowSum = 0;

        for (let j = 0; j < numberOfColumns; j++) {
            addToSum = inputMatrix[i][j] === "" ? 0 : parseFloat(inputMatrix[i][j]);
            rowSum += addToSum;
        }

        if (rowSum === 0) {
            stochasticDict[i] = 0;
        } else if (rowSum < 0.99999999 || rowSum > 1.00000001) {
            stochasticDict[i] = -1;
        } else {
            stochasticDict[i] = 1;
        }
    }


    for (let rowIndex in stochasticDict) {
        totalSum += stochasticDict[rowIndex]

        if (stochasticDict[rowIndex] === 0) {
            numberOfZeroRows += 1;
        }
    }

    if (totalSum === 0 || totalSum !== (numberOfRows - numberOfZeroRows)) {
        return [-1, stochasticDict];
    } else if (numberOfZeroRows > 0) {
        return [0, stochasticDict];
    } else {
        return [1, stochasticDict];
    }
}

export const vectorIsRowStochastic = inputVector => {
    let numberOfColumns = inputVector.length;
    let rowSum = 0;
    let fullyRowStochastic = true;
    let rowStochastic = false;
    let addToSum;

    for (let i = 0; i < numberOfColumns; i++) {
        addToSum = inputVector[i] === "" ? 0 : parseFloat(inputVector[i]);
        rowSum += addToSum;
    }

    if (rowSum === 0) {
        rowStochastic = true;
        fullyRowStochastic = false;
    } else if (rowSum < 0.99999999 || rowSum > 1.00000001) {
        return -1;
    }

    if (rowStochastic) {
        return 0;
    } else if (fullyRowStochastic) {
        return 1;
    } else {
        return -1;
    }
}

export const generateNum = v => {
    return Math.pow(10, Math.floor(v).toString().length - 1);
  }