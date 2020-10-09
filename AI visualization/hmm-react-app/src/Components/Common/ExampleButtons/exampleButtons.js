import React from 'react';
import classes from './exampleButtons.module.scss';

import ExampleButton from './ExampleButton/exampleButton';

import weatherBG from '../../../Resources/Images/Backgrounds/weather_blur_dark.png';
import runnerBG from '../../../Resources/Images/Backgrounds/runner_blur_dark.png';

const ExampleButtons = (props) => {
    return (
        <div className={classes.ExampleButtons}>
            <ExampleButton active={true} backgroundImg={weatherBG} example="Weather example" />
            <ExampleButton active={false} backgroundImg={runnerBG} example="Runner example" />
        </div>
    )
}

export default ExampleButtons;