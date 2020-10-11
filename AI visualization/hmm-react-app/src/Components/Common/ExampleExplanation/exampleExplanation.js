import React from 'react';
import classes from './exampleExplanations.module.scss';


const ExampleExplanations = (props) => {
    return (
        <div className={classes.ExampleExplanations}>
            {props.children}
        </div>
    )
}

export default ExampleExplanations;