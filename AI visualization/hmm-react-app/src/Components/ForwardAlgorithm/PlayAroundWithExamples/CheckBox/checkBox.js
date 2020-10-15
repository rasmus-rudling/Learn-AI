import React from 'react';
import classes from './checkBox.module.scss';

const CheckBox = (props) => {
    return (
        <>
            {props.ticked ?
                <div className={classes.checkBoxTicked}>
                    ×
                </div> :
                <div 
                    className={classes.checkBoxNotTicked}
                    onClick = {() => {
                        props.exampleTypeSelectedHandler(props.exampleType)
                    }}
                >
                    ×
                </div>
            }
        </>
        
    )
}

export default CheckBox;