import React from 'react';
import classes from './inputMatrix.module.scss';

import * as utility from '../../../../Common/utility';

const InputMatrix = (props) => {
    let borderColor;

    const greenColor = "#6EC668";
    const redColor = "#E95252";
    const blueColor = "#43AFCA";
    
    if (props.themeColor === "green") {
        borderColor = greenColor;
    } else if (props.themeColor === "red") {
        borderColor = redColor;
    } else if (props.themeColor === "blue") {
        borderColor = blueColor;
    }

    let firstMatrixRow = [<span style={{"color":borderColor, "fontSize":"1.7rem"}}>{props.matrixName}</span>];

    for (let i = 0; i < props.numberOfColumns; i++) {
        if (props.matrixName === "A") {
            firstMatrixRow.push(<span>S<sub><b className={classes.setOrangeColor}>{i}</b></sub></span>)
        } else if (props.matrixName === "B") {
            firstMatrixRow.push(<span>O<sub><b className={classes.setOrangeColor}>{i}</b></sub></span>)
        }
    }

    let _matrix = [firstMatrixRow, ...props.matrix];
    
    let _matrixCopy = [];

    if (_matrix[1].length === props.numberOfColumns) {
        for (let i = 0; i < props.numberOfRows; i++) {
            _matrixCopy.push([<span>S<sub><b className={classes.setOrangeColor}>{i}</b></sub></span>, ..._matrix[i + 1]])
        }
    }
    
    _matrixCopy = [firstMatrixRow, ..._matrixCopy];
    return (
        <div className={classes.VisualMatrix} >
            <div className={classes.matrixContent} style={{"borderColor":borderColor}}>
                {_matrixCopy.map((matrixRow, rowIndex) => {
                    return (
                        <div className={classes.rowContainer} key={String(rowIndex)}>
                            {matrixRow.map((element, columnIndex) => {
                                if (rowIndex === 0 || (rowIndex !== 0 && columnIndex === 0)) {
                                    return (
                                        <div 
                                            style={{"borderColor":borderColor}} 
                                            key={String(rowIndex) + String(columnIndex)}
                                        >
                                            {element}
                                        </div>)
                                } else {
                                    return (
                                        <div 
                                            style={{"borderColor":borderColor}} 
                                            key={String(rowIndex) + String(columnIndex)}
                                        >
                                            <form
                                                onSubmit={e => e.preventDefault()}
                                            >
                                                <input 
                                                    type="text" 
                                                    className={props.stochasticRows[rowIndex-1] === 1 ? 
                                                        classes.probabilityInput : 
                                                        [classes.probabilityInput, classes.rowWarning].join(" ")
                                                    }
                                                    value={element}

                                                    onChange={e => {
                                                        let newValue = e.target.value;
                                                        let oldValue = String(element);

                                                        let oldValueWasEmpty = oldValue.length === 0;
                                                        
                                                        let newValue1 = newValue.substr(0, 2).replace(/[^0-9.]/g, '');
                                                        let newValue2 = newValue.substr(2, newValue.length).replace(/[^0-9]/g, '');
                                                        
                                                        newValue = newValue1 + newValue2;
                                                        
                                                        newValue = newValue.substr(0, 7);

                                                        if (oldValue.charAt(0) === "0" && oldValue.charAt(1) === "." && newValue.length === 1 && oldValue.length == 2 && newValue.charAt(0) === "0") {
                                                            // console.log("R1")
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "", props.matrixName);
                                                        } else if (oldValueWasEmpty && newValue.charAt(0) === "0") {
                                                            // console.log("R2")
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "0.", props.matrixName);
                                                        } else if (newValue.charAt(0) === "0" && newValue.charAt(1) === ".") {
                                                            // console.log("R3")
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, newValue, props.matrixName)
                                                        } else if (newValue.charAt(0) === "1" && newValue.length == 1) {
                                                            // console.log("R4")
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, newValue, props.matrixName)
                                                        } else if (oldValue.charAt(0) === "1" && newValue.charAt(0) === "") {
                                                            // console.log("R5")
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, newValue, props.matrixName)
                                                        } else if (newValue.length == 1) {
                                                            // console.log("R6")
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "0." + newValue, props.matrixName)
                                                        } else if (newValue.length === 0) {
                                                            // console.log("R7")
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "", props.matrixName)
                                                        }
                                                    }}

                                                    onBlur = {e => {
                                                        let inputValue = e.target.value;

                                                        if (inputValue == "" || parseFloat(inputValue) === 0) {
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "0", props.matrixName)
                                                        }

                                                        props.checkMatrixRowStochasticHandler(props.matrixName);
                                                    }}

                                                    onFocus = {e => {
                                                        let inputValue = e.target.value;

                                                        if (inputValue == "0") {
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "0.", props.matrixName)
                                                        } 
                                                    }}

                                                    onKeyDown={e => {
                                                        if (e.key === "Enter" || e.key === "NumpadEnter") {
                                                            props.checkMatrixRowStochasticHandler(props.matrixName);
                                                        }
                                                    }}
                                                />
                                            </form>
                                        </div>)
                                }
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InputMatrix;