import React from 'react';
import classes from './backButton.module.scss';


const BackButton = (props) => {
    return (
        <div className={classes.BackButton}>
            ← Back
        </div>
    )
}

export default BackButton;