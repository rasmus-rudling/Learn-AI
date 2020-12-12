import React from 'react';
import classes from './division.module.scss';


const Division = (props) => {
    return (
        <div className={classes.Division}> 
            <div className={classes.numerator}>{props.numerator}</div>
            <div className={classes.horizontalLine} />
            <div className={classes.denominator}>{props.denominator}</div>
        </div>
    )
}

export default Division;