import React from 'react';
import classes from './inputVector.module.scss';

import * as utility from '../../../../Common/utility';

const InputVector = (props) => {
    let borderColor, _vectorName, fontSize, marginToUse;

    const greenColor = "#6EC668";
    const redColor = "#E95252";
    const blueColor = "#43AFCA";
    const orangeColor = "#FFA500";
    
    if (props.themeColor === "green") {
        borderColor = greenColor;
    } else if (props.themeColor === "red") {
        borderColor = redColor;
    } else if (props.themeColor === "blue") {
        borderColor = blueColor;
    } else if (props.themeColor === "orange") {
        borderColor = orangeColor;
    }

    if (props.vectorName === "pi") {
        _vectorName = "π";
        fontSize = "2rem";
        marginToUse = "-10px 0 3px 0";
    } else if (props.vectorName.substr(0, 5) === "alpha") {
        let alphaIndex = props.vectorName.substr(-1);
        _vectorName = utility.alpha_without_parenthesis(alphaIndex);
        fontSize = "1.5rem";
        marginToUse = "0 0 3px 0";
    }

    let firstMatrixRow = [];

    for (let i = 0; i < props.numberOfColumns; i++) {
        if (props.vectorName.substr(0, 5) === "alpha" || props.vectorName === "pi") {
            firstMatrixRow.push(<span>S<sub><b className={classes.setOrangeColor}>{i}</b></sub></span>)
        } 
    }

    let _matrix = [firstMatrixRow, props.vector];

    
    return (
        <div className={props.vectorName === "pi" ? classes.vectorContainer : null}>
            <div className={classes.VisualMatrix} >
                <div style={{"color":borderColor, "fontSize":fontSize, "margin":marginToUse}}>{_vectorName}</div>

                <div className={classes.matrixContent} style={{"borderColor":borderColor}}>
                    {_matrix.map((matrixRow, rowIndex) => {
                        return (
                            <div 
                                className={classes.rowContainer} 
                                key={String(rowIndex)}
                            >
                                {matrixRow.map((element, columnIndex) => {
                                    if (rowIndex === 0) {
                                        return (
                                            <div 
                                                style={props.vectorName.substr(0, 5) === "alpha" ? 
                                                    {"borderColor":borderColor, "width":"85px"} : 
                                                    {"borderColor":borderColor}
                                                } 
                                                key={String(rowIndex) + String(columnIndex)}
                                                
                                            >
                                                {element}
                                            </div>)
                                    } else {
                                        return (
                                            <div 
                                                style={props.vectorName.substr(0, 5) === "alpha" ? 
                                                    {"borderColor":borderColor, "width":"85px"} : 
                                                    {"borderColor":borderColor}
                                                } 
                                                key={String(rowIndex) + String(columnIndex)}
                                            >
                                                <form
                                                    onSubmit={e => e.preventDefault()}
                                                >
                                                    <input 
                                                        type="text"
                                                        className={props.vectorStochastic ? 
                                                            classes.probabilityInput : 
                                                            [classes.probabilityInput, classes.rowWarning].join(" ")
                                                        }
                                                        value={element}
                                                        style={props.vectorName === "pi" ? {"color": "#FFA500", "fontWeight":"bold"} : null}

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
                                                                props.changeVectorValueHandler(columnIndex, "", props.vectorName);
                                                            } else if (oldValueWasEmpty && newValue.charAt(0) === "0") {
                                                                // console.log("R2")
                                                                props.changeVectorValueHandler(columnIndex, "0.", props.vectorName);
                                                            } else if (newValue.charAt(0) === "0" && newValue.charAt(1) === ".") {
                                                                // console.log("R3")
                                                                props.changeVectorValueHandler(columnIndex, newValue, props.vectorName)
                                                            } else if (newValue.charAt(0) === "1" && newValue.length == 1) {
                                                                // console.log("R4")
                                                                props.changeVectorValueHandler(columnIndex, newValue, props.vectorName)
                                                            } else if (oldValue.charAt(0) === "1" && newValue.charAt(0) === "") {
                                                                // console.log("R5")
                                                                props.changeVectorValueHandler(columnIndex, newValue, props.vectorName)
                                                            } else if (newValue.length == 1) {
                                                                // console.log("R6")
                                                                props.changeVectorValueHandler(columnIndex, "0." + newValue, props.vectorName)
                                                            } else if (newValue.length === 0) {
                                                                // console.log("R7")
                                                                props.changeVectorValueHandler(columnIndex, "", props.vectorName)
                                                            }
                                                        }}

                                                        onBlur = {e => {
                                                            let inputValue = e.target.value;

                                                            if (inputValue == "" || parseFloat(inputValue) === 0) {
                                                                props.changeVectorValueHandler(columnIndex, "0", props.vectorName)
                                                            }

                                                            props.checkVectorRowStochasticHandler(props.vectorName);
                                                        }}

                                                        onFocus = {e => {
                                                            let inputValue = e.target.value;

                                                            if (inputValue == "0") {
                                                                props.changeVectorValueHandler(columnIndex, "0.", props.vectorName)
                                                            } 
                                                        }}

                                                        onKeyDown={e => {
                                                            if (e.key === "Enter" || e.key === "NumpadEnter") {
                                                                props.checkVectorRowStochasticHandler(props.vectorName);
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
        </div>
    )
}

export default InputVector;