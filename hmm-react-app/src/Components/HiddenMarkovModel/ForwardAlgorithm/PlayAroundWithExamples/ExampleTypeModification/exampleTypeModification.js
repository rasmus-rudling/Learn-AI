import React from 'react';
import classes from './exampleTypeModification.module.scss';

import CheckboxModification from './CheckBoxModification/checkBoxModification';

const ExampleTypeModification = (props) => {
    return (
        <div className={classes.ExampleType}>
            <div>{props.exampleType}</div>

            <CheckboxModification
                ticked={props.thisSettingIsSelected}
                exampleType={props.exampleType}
                checkboxSelectedHandler={props.checkboxSelectedHandler}
            />
        </div>
    )
}

export default ExampleTypeModification;