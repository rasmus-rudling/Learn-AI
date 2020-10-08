import React from 'react';
import classes from './matrix.module.scss';

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
    
    console.log(props.matrix)

    return (
        <div className={classes.Matrix} >
            <span style={{"marginRight":"10px"}}>{props.vectorName}</span> = 
            <div className={classes.leftBracket} 
                style={{
                    "borderColor": borderColor, 
                    "marginLeft":"10px",
                    "marginRight":"-8px",
                    "height":heightOfBrackets
                }} 
            />

            <div className={classes.matrixContent}>
                {props.matrix.map(matrixRow => {
                    return (
                        <div className={classes.rowContainer}>
                            {matrixRow.map(element => {
                                return (<div>{element}</div>)
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