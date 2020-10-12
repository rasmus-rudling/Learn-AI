import React from 'react';
import classes from './vector.module.scss';

const Vector = (props) => {
    let borderColor;

    if (props.themeColor === "green") {
        borderColor = "#6EC668";
    } else if (props.themeColor === "orange") {
        borderColor = "#FFA500";
    }

    return (
        <div className={classes.Vector} >
            <span style={{"marginRight":"10px"}}>{props.vectorName}</span> = 
            <div className={classes.leftBracket} style={{"borderColor": borderColor, "marginLeft":"10px"}} />
            <ul>
                {props.vector.map((element, index) => {
                    return (
                        <li 
                            key = {index}
                            className={classes.vectorElement}
                            style = {index !== (props.vector.length - 1) ? {"marginRight":"20px"} : {"marginRight":"0px"}}
                        >
                            {element}
                        </li>
                    )
                })}
            </ul>
            <div className={classes.rightBracket} style={{"borderColor": borderColor}}/>
        </div>
    )
}

export default Vector;