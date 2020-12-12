import React from 'react';

import BackButton from '../../../Common/BackButton/backButton';
import classes from './weatherExample.module.scss';

const WeatherExample = () => {
    return (
        <div style={{"textAlign":"center"}}>
            <h1>Weather Example</h1>
            <h2 style={{"color":"red"}}>No content yet.</h2>
            <BackButton />
        </div>
    )
}

export default WeatherExample;