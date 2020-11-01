import React from 'react';
import classes from './visualMatrix.module.scss';

const VisualMatrix = (props) => {
    let borderColor;

    const greenColor = "#6EC668";
    const redColor = "#E95252";
    const blueColor = "#43AFCA";
    let vertImages = [...props.verticalImages];
    
    if (props.themeColor === "green") {
        borderColor = greenColor;
    } else if (props.themeColor === "red") {
        borderColor = redColor;
    } else if (props.themeColor === "blue") {
        borderColor = blueColor;
    }


    let firstMatrixRow = [props.matrixName, ...props.horizontalImages];
    let matrixToVisualize = [firstMatrixRow, ...props.matrix];
    
    let matrixToVisualizeCopy;

    if (matrixToVisualize[1].length === props.horizontalImages.length) {
        matrixToVisualizeCopy = vertImages.map((image, index) => {
            return [image, ...matrixToVisualize[index + 1]]
        }) 
    }
    
    matrixToVisualizeCopy = [firstMatrixRow, ...matrixToVisualizeCopy];

    return (
        <div className={classes.VisualMatrix} >
            <div className={classes.matrixContent} style={{"borderColor":borderColor}}>
                {matrixToVisualizeCopy.map((matrixRow, rowIndex) => {
                    return (
                        <div className={classes.rowContainer} key={String(rowIndex)}>
                            {matrixRow.map((element, columnIndex) => {
                                if ((rowIndex === 0 && columnIndex !== 0) || (rowIndex !== 0 && columnIndex === 0)) {
                                    return (
                                        <div 
                                            style={{"borderColor":borderColor}} 
                                            className={props.weatherExampleSelected ? classes.weatherCell : classes.runnerCell}
                                            key={String(rowIndex) + String(columnIndex)}
                                        >
                                            {props.useImages !== undefined ? element : <img src={element} alt="" />}
                                        </div>)
                                } else {
                                    return (
                                        <div 
                                            style={{"borderColor":borderColor}} 
                                            key={String(rowIndex) + String(columnIndex)}
                                        >
                                            {element}
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

export default VisualMatrix;