import React from 'react';
import classes from './inputMatrix.module.scss';

import * as utility from '../../../Common/Utility/utility';

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
                                                    className={classes.probabilityInput}
                                                    value={element}

                                                    onChange={e => {
                                                        let newValue = e.target.value;
                                                        newValue = newValue.replace(/[^0-9.]/g, '');
                                                        
                                                        if (newValue.length === 1) {
                                                            newValue = utility.replaceCharAt(newValue, 0, "0");
                                                            newValue = utility.addCharAfter(newValue, 0, ".");
                                                        } else if (newValue.length < 1) {
                                                            newValue = utility.replaceCharAt(newValue, 0, "0");
                                                        }
                                                        
                                                        newValue = newValue.substr(0, 7);

                                                        if (newValue.charAt(0) === "0") {
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, newValue, props.matrixName)
                                                        }
                                                    }}

                                                    onBlur = {e => {
                                                        let inputValue = e.target.value;

                                                        if (inputValue == "0.") {
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "0", props.matrixName)
                                                        }
                                                    }}

                                                    onFocus = {e => {
                                                        let inputValue = e.target.value;

                                                        if (inputValue == "0") {
                                                            props.changeMatrixValueHandler(rowIndex-1, columnIndex-1, "0.", props.matrixName)
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