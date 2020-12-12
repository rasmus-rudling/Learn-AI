import React from 'react';
import classes from './matrix.module.scss';
import * as utility from '../../Common/utility';

const Matrix = (props) => {
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

    const numberOfRowsInMatrix = props.matrix.length;

    const heightOfBrackets = (numberOfRowsInMatrix * 27) + 3 + "px";
    

    return (
        <div className={classes.Matrix} >
            <span>{props.matrixName}</span>{utility.blankSpace}= 
            <div className={classes.leftBracket} 
                style={{
                    "borderColor": borderColor, 
                    "marginLeft":"12px",
                    "marginRight":"-8px",
                    "height":heightOfBrackets
                }} 
            />

            <div className={classes.matrixContent}>
                {props.matrix.map((matrixRow, i) => {
                    return (
                        <div className={classes.rowContainer} key={String(i)}>
                            {matrixRow.map((element, j) => {
                                return (<div key={String(i) + String(j)}>{element}</div>)
                            })}
                        </div>
                    )
                })}
            </div>

            
            <div className={classes.rightBracket} 
                style={{
                    "borderColor": borderColor,
                    "marginLeft":"-8px",
                    "height": heightOfBrackets
                    }}/>
        </div>
    )
}

export default Matrix;