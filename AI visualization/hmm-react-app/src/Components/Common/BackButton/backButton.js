import React from 'react';

import { useHistory } from 'react-router-dom';

import classes from './backButton.module.scss';

const BackButton = (props) => {
    const history = useHistory();

    return (
        <div className={classes.BackButton} onClick={() => history.goBack()}>
            ← Back
        </div>
    )
}

export default BackButton;