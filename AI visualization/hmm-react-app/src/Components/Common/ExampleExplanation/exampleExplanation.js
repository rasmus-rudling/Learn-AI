import React from 'react';
import classes from './exampleExplanations.module.scss';

import Subsection from '../Subsection/subsection';

const ExampleExplanations = (props) => {
    return (
        <div className={classes.ExampleExplanations}>
            <Subsection 
                contentBackgroundColor="#F2FFF1" 
                headerBackgroundColor="#6EC668" 
                buttonHoverColor="#1F471C"
                newWidth = "100%"
                header = {props.header}
                maxHeight= {props.maxHeight}
                hideDefault={props.hideDefault}
            >
                {props.children}
            </Subsection>
        </div>
    )
}

export default ExampleExplanations;