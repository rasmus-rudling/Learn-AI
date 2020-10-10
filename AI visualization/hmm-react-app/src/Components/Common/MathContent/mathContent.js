import React from 'react';
import classes from './mathContent.module.scss';


const MathContent = (props) => {
    return (
        <div className={classes.MathContent}>
            {props.children}
        </div>
    )

}


export default MathContent;