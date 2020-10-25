import React from 'react';
import classes from './exampleType.module.scss';

import Checkbox from '../CheckBox/checkBox';

const ExampleType = (props) => {
    return (
        <div className={classes.ExampleType}>
            <div>{props.exampleType}</div>

            <Checkbox 
                ticked={props.thisSettingIsSelected}
                exampleType={props.exampleType}
                checkboxSelectedHandler={props.checkboxSelectedHandler}
            />
        </div>
    )
}

export default ExampleType;