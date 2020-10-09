import React from 'react';
import classes from './homeButton.module.scss';
import homeIcon from '../../../Resources/Icons/artificial-intelligence.svg';

const HomeButton = (props) => {

    let classesList = [classes.HomeButton]

    classesList = [...classesList, props.extraClass]
    return (
        <div className={classesList.join(" ")}>
            <img src={homeIcon} />
        </div>
    )
}

export default HomeButton;