import React from 'react';
import classes from './homeButton.module.scss';
import homeIcon from '../../../Resources/Icons/artificial-intelligence.svg';

import { Link } from 'react-router-dom';


const HomeButton = (props) => {

    let classesList = [classes.HomeButton]

    classesList = [...classesList, props.extraClass]
    return (
        <Link to="/">
            <div className={classesList.join(" ")}>
                <img src={homeIcon} alt="Homebutton" />
            </div>
        </Link>
        
    )
}

export default HomeButton;