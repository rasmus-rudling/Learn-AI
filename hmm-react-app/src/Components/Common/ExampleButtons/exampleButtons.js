import React, { useState, useEffect } from 'react';
import classes from './exampleButtons.module.scss';

import ExampleButton from './ExampleButton/exampleButton';

import weatherBG from '../../../Resources/Images/Backgrounds/weather_blur_dark.png';
import runnerBG from '../../../Resources/Images/Backgrounds/runner_blur_dark.png';

const ExampleButtons = (props) => {
    const [yScroll, setYscroll] = useState(window.scrollY);
    const handleChangeActiveExample = () => {
        props.handleChangeActiveExample();
    }

    const handleScroll = () => {
        setYscroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    }, [])

    let extraStyle = yScroll < 100 ? {
        "position" : "absolute"
    } : {
        "position" : "fixed",
        "top": "10px"
    }

    return (
        <div 
            className={classes.ExampleButtons}
            style = {window.innerWidth >= 1250 ? extraStyle : {"position" : "absolute"}}
            onScroll = {handleScroll}
        >
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