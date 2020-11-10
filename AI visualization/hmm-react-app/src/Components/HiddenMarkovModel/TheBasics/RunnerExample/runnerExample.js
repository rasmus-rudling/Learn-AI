import React from 'react';

import classes from './runnerExample.module.scss';
import theBasicsBackgroundImage from '../../../../Resources/Images/Backgrounds/bg5.png';
import runnerExampleTransition from '../../../../Resources/Other/runner-example.svg';

import Subsection from '../../../Common/Subsection/subsection';
import HomeButton from '../../../Common/HomeButton/homeButton';
import MathContent from '../../../Common/MathContent/mathContent';
import ExtraInfo from '../../../Common/ExtraInfo/extraInfo';
import GreenListItem from '../../../Common/GreenListItem/greenListItem';
import Matrix from '../../../Common/Matrix/matrix';
import Vector from '../../../Common/Vector/vector';
import ImportantInfo from '../../../Common/ImportantInfo/importantInfo';
import VisualMatrix from '../../../Common/VisualMatrix/visualMatrix';
import BackButton from '../../../Common/BackButton/backButton';


const RunnerExample = () => {
    return (
        <div>
            <img src = {theBasicsBackgroundImage} className="backgroundImage" alt="" />
            <HomeButton extraClass={classes.homeButton}/>

            <h1>Runner Example</h1>
            <BackButton />

            <h2 style={{"color":"#2d2d2d"}}>Probabilities of state transitions</h2>

            <img src={runnerExampleTransition} style={{"width":"750px", "margin":"20px auto 50px", "display":"block"}} />
            
        </div>
    )
}

export default RunnerExample;