import React from 'react';
import classes from './sumChar.module.scss';


const SumChar = (props) => {
    let noElementOnTop = props.top === "";
    
    let topElement =  noElementOnTop ? 
        <div className={classes.invisable}>5</div> :
        <div className={classes.topOfSum}>{props.top}</div>;

    return (
        <div 
            className={classes.SumChar}
            // style={noElementOnTop ? {"marginTop":"-10px", "marginLeft":"-35px"} : {"marginTop":"-10px"}}
        > 
            {topElement}
            <div className={classes.theSumChar}>∑</div>
            <div className={classes.bottomOfSum}>{props.bottom}</div>
        </div>
    )
}

export default SumChar;