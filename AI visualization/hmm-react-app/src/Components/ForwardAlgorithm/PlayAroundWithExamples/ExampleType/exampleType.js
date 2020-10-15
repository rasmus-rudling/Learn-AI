import React from 'react';
import classes from './exampleType.module.scss';

import Checkbox from '../CheckBox/checkBox';

const ExampleType = (props) => {
    return (
        <div className={classes.ExampleType}>
            <div>{props.exampleType}</div>

            <Checkbox 
                ticked={props.thisExampleTypeSelected}
                exampleType={props.exampleType}
                exampleTypeSelectedHandler={props.exampleTypeSelectedHandler}
            />
        </div>
    )
}

export default ExampleType;