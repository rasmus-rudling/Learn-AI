import React from 'react';

import BackButton from '../../../Common/BackButton/backButton';
import classes from './theory.module.scss';

import * as utility from '../../../Common/Utility/utility';

import theBasicsBackgroundImage from '../../../../Resources/Images/Backgrounds/bg5.png';
import hmmIllustration from '../../../../Resources/Other/hmm-illustration.svg';

import Subsection from '../../../Common/Subsection/subsection';
import HomeButton from '../../../Common/HomeButton/homeButton';
import MathContent from '../../../Common/MathContent/mathContent';
import ExtraInfo from '../../../Common/ExtraInfo/extraInfo';


const Theory = () => {
    return (
        <div className={classes.Theory}>
            <img src = {theBasicsBackgroundImage} className={classes.backgroundImage} alt="" />
            <HomeButton extraClass={classes.homeButton}/>

            <h1>Theory</h1>
            <BackButton />

            <h2 style={{"color":"#2d2d2d"}}>General illustration of state-/ observation probabilities</h2>

            <div style={{"margin":"20px 0 50px", "textAlign":"center"}}>
                <img src={hmmIllustration} style={{"width":"750px"}} />
            </div>

            <Subsection 
                header = "Intuitive meaning" 
                maxHeight="500px" 
                hideDefault={false}
            >
                <p>
                    If we are in state {utility.S("t-1")}, we use the transition matrix {utility.a("i,j")} to find out what's the most probable
                    state in the next time step t. If we know what state we are in, we can use the observation
                    matrix {utility.b("j,k")} to find out what's the most probable observation made in that same time step
                    t-1. Another way to formulate the transiton matrix is:
                </p>

                <MathContent extraStyle={{"margin":"0px 0px 5px 0px"}}>
                    {utility.a("i,j")}{utility.blankSpace}={utility.blankSpace}{utility.A_alone()}{utility.brackets(" i ", "black", "red")}
                    {utility.brackets(" j ", "black", "red")}
                    {utility.blankSpace}= 𝑃({utility.S("t")} = {utility.S_black("j")}{utility.blankSpace}|
                    {utility.blankSpace}{utility.S("t-1")} = {utility.S_black("i")})
                </MathContent>

                <p>
                    This reads as <i>"the value positioned at the i<sup>th</sup> row and at the j<sup>th</sup> column in the
                    transition matrix A is the probability that we are in state number j <b>given</b> that we
                    were in state number i in the previous time step"</i>. 
                </p>

                <p style={{"marginTop":"10px"}}>
                    We can formulate the emission matrix in the same way:
                </p>

                <MathContent extraStyle={{"margin":"0px 0px 5px 0px"}}>
                    {utility.b("j,k")}{utility.blankSpace}={utility.blankSpace}{utility.B_alone()}{utility.brackets(" j ", "black", "blue")}
                    {utility.brackets(" k ", "black", "blue")}
                    {utility.blankSpace}= 𝑃({utility.O("t")} = {utility.O_black("k")}{utility.blankSpace}|
                    {utility.blankSpace}{utility.S("t")} = {utility.S_black("j")})
                </MathContent>

                <p>
                    This reads as <i>"the value positioned at the j<sup>th</sup> row and at the k<sup>th</sup> column in the
                    observation matrix B is the probability that we observe observation number k given that we
                    are in state number j in the current time step"</i>.
                </p>

            </Subsection>

            <ExtraInfo infoType="Caveat">
                When the red {utility.S("t")} is used, we imply the active state at time step t. Conversely,
                when the black {utility.S_black("n")} is used, we imply a specific state without taking time steps into
                account. E.g. if the set of possible states is {utility.curlyLeft} {utility.S_black(0)},{utility.blankSpace}
                {utility.S_black(1)},{utility.S_black(2)} {utility.curlyRight} then {utility.S(5)} could be either {utility.S_black(0)},
                {utility.blankSpace}{utility.S_black(1)} or {utility.S_black(2)}.
            </ExtraInfo>

            <Subsection 
                header = "Definitions" 
                maxHeight="1000px" 
                hideDefault={false}
            >


            </Subsection>
        </div>
    )
}

export default Theory;