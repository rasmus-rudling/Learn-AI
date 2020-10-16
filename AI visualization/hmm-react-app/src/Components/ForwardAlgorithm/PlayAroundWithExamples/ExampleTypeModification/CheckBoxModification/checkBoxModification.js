import React from 'react';
import classes from './checkBoxModification.module.scss';

const CheckBoxModification = (props) => {
    return (
        <>
            {props.ticked ?
                <div 
                    className={classes.checkBoxTicked}
                    onClick = {() => {
                        props.checkboxSelectedHandler()
                    }}
                >
                    ×
                </div> :
                <div 
                    className={classes.checkBoxNotTicked}
                    onClick = {() => {
                        props.checkboxSelectedHandler()
                    }}
                >
                    ×
                </div>
            }
        </>
        
    )
}

export default CheckBoxModification;