import React from 'react';
import classes from './exampleButtons.module.scss';

import ExampleButton from './ExampleButton/exampleButton';

import weatherBG from '../../../Resources/Images/Backgrounds/weather_blur_dark.png';
import runnerBG from '../../../Resources/Images/Backgrounds/runner_blur_dark.png';

const ExampleButtons = (props) => {

    const handleChangeActiveExample = () => {
        props.handleChangeActiveExample();
    }

    return (
        <div className={classes.ExampleButtons}>
            <ExampleButton 
                active={props.weatherExampleSelected} 
                backgroundImg={weatherBG} 
                example="Weather example" 
                onClickHandler = {() => {
                    if (!props.weatherExampleSelected) {
                        handleChangeActiveExample()
                    }
                }}
            />

            <ExampleButton 
                active={!props.weatherExampleSelected}
                backgroundImg={runnerBG}
                example="Runner example"
                onClickHandler = {() => {
                    if (props.weatherExampleSelected) {
                        handleChangeActiveExample()
                    }
                }}
            />
        </div>
    )
}

export default ExampleButtons;