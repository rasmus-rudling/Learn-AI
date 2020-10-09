import React from 'react';
import classes from './homeButton.module.scss';
import homeIcon from '../../../Resources/Icons/artificial-intelligence.svg';

const HomeButton = (props) => {
    return (
        <div className={classes.HomeButton}>
            <img src={homeIcon} />
        </div>
    )
}

export default HomeButton;