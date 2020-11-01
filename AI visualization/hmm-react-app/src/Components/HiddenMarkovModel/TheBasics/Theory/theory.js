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
import GreenListItem from '../../../Common/GreenListItem/greenListItem';
import Matrix from '../../../Common/Matrix/matrix';
import Vector from '../../../Common/Vector/vector';
import ImportantInfo from '../../../Common/ImportantInfo/importantInfo';
import VisualMatrix from '../../../Common/VisualMatrix/visualMatrix';

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
                    {utility.blankSpace}= 𝑃({utility.S("t")}{utility.blankSpace}= {utility.blankSpace} {utility.S_black("j")} {utility.blankSpace}|
                    {utility.blankSpace}{utility.S("t-1")} {utility.blankSpace}= {utility.blankSpace}{utility.S_black("i")})
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
                    {utility.blankSpace}= 𝑃({utility.O("t")} {utility.blankSpace}= {utility.blankSpace} {utility.O_black("k")}{utility.blankSpace}|
                    {utility.blankSpace}{utility.S("t")} {utility.blankSpace} = {utility.blankSpace} {utility.S_black("j")})
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
                account. E.g. if the set of possible states is {utility.curlyLeft} {utility.blankSpace}{utility.S_black(0)},{utility.blankSpace}
                {utility.S_black(1)},{utility.S_black(2)} {utility.curlyRight}{utility.blankSpace} then {utility.S(5)} could be either {utility.S_black(0)},
                {utility.blankSpace}{utility.S_black(1)} or {utility.S_black(2)}.
            </ExtraInfo>

            <Subsection 
                header = "Definitions" 
                maxHeight="1665px" 
                hideDefault={true}
            >
                <ul className={classes.listStyle}>
                    <GreenListItem title="Background info">
                        The abbreviation <b>HMM</b> stands for <b>H</b>idden <b>M</b>arkov <b>M</b>odel. The word 
                        hidden is used because the states are hidden. We make observations that will help us
                        calculate the probability of being in a certain state at a certain time step. There are
                        other types of Markov Models as well, but these are not covered on this page.
                    </GreenListItem>

                    <GreenListItem title="Cardinality">
                        When using the word cardinality we refer to the number of elements in a
                        certain set. For example the cardinality of the set S<sub>1</sub> = {utility.blankSpace}{utility.curlyLeft}{utility.blankSpace}
                        X, Y, Z {utility.blankSpace}{utility.curlyRight} 
                        {utility.blankSpace}is three because the set contains three unique elements. To be precise, the set S<sub>2</sub> = {utility.blankSpace}{utility.curlyLeft} 
                        {utility.blankSpace}X, Y, Z, Y, Z, X {utility.blankSpace}{utility.curlyRight} also 
                        have the cardinality three, because the set also contains three unique elements. In a
                        mathematical context we write | S<sub>1</sub> | = 3 to denote that the cardinality of set S<sub>1</sub> is three.
                    </GreenListItem>

                    <GreenListItem title="States">
                        As mentioned above, states in HMM are hidden. That is, we can't for sure know
                        what state is present in the current time step. Depending on which source you're
                        reading, states are called different things. Some of them, if not all, are: <i>hidden states</i>, 
                        {utility.blankSpace}<i>states</i> and <i>emitters</i>. On this page, we will use the notation <i>states</i>. There are many
                        different ways to mathematically notate a certain state. On this site, we declare a state
                        at a certain time step t to be denoted S<sub>t</sub>. 
                    </GreenListItem>

                    <GreenListItem title="Observations">
                        As with states, observations have different names depending on which 
                        source you're getting your information from. Some of them, if not all, are: <i>outputs</i>, 
                        {utility.blankSpace}<i>emissions</i>, <i>observations</i> and <i>visible states</i>. On this site, we use the word <i>observation</i>,
                        and we denote an observation at time step <i>t</i> as O<sub>t</sub>.
                    </GreenListItem>

                    <GreenListItem title="Set of time steps">
                        The set of all time steps are defined as {utility.blankSpace}{utility.curlyLeft}{utility.blankSpace}t<sub>0</sub>, t<sub>1</sub>, ..., 
                        t<sub>T-1</sub> {utility.blankSpace}{utility.curlyRight}. Meaning that the cardinality of the set of time steps | {utility.blankSpace}{utility.curlyLeft}
                        {utility.blankSpace}t<sub>0</sub>, t<sub>1</sub>, ..., t<sub>T-1</sub> {utility.blankSpace}{utility.curlyRight} | = <b>T</b>.
                    </GreenListItem>

                    <GreenListItem title="Set of states">
                        The set of all states are defined as <b>S</b> = {utility.blankSpace}{utility.curlyLeft}{utility.blankSpace}S<sub>0</sub>, S<sub>1</sub>, ..., 
                        S<sub>N-1</sub> {utility.blankSpace}{utility.curlyRight}. Meaning that the cardinality of the set of states | {utility.blankSpace}{utility.curlyLeft}
                        {utility.blankSpace}S<sub>0</sub>, S<sub>1</sub>, ..., S<sub>N-1</sub> {utility.blankSpace}{utility.curlyRight} | = <b>N</b>.
                    </GreenListItem>

                    <GreenListItem title="Set of possible observations">
                        The set of possible observations are defined as <b>O</b> = {utility.blankSpace}{utility.curlyLeft}{utility.blankSpace}O<sub>0</sub>, O<sub>1</sub>, ..., 
                        O<sub>K-1</sub> {utility.blankSpace}{utility.curlyRight}. Meaning that the cardinality of the set of possible observations | {utility.blankSpace}{utility.curlyLeft}
                        {utility.blankSpace}O<sub>0</sub>, O<sub>1</sub>, ..., O<sub>N-1</sub> {utility.blankSpace}{utility.curlyRight} | = <b>K</b>.
                    </GreenListItem>

                    <GreenListItem title="State sequence">
                        The state sequence is defined as <b>{utility.blankSpace}{utility.S_alone()}</b>= {utility.blankSpace}{utility.curlyLeft}{utility.blankSpace} {utility.S(0)}, {utility.blankSpace}{utility.S(1)}, ...,
                        {utility.blankSpace} {utility.S("T-1")} {utility.curlyRight} = {utility.blankSpace}{utility.S("0:T-1")} <span style={{"marginRight":"-10px"}}></span>. In other
                        words, <b>{utility.blankSpace}{utility.S_alone()}</b>is the set of all the (hidden) states that the model visits during the time steps
                        {utility.blankSpace} {utility.curlyLeft} {utility.blankSpace}t<sub>0</sub>, t<sub>1</sub>, ..., t<sub>T-1</sub> {utility.blankSpace}{utility.curlyRight}. Note that a specific state S<sub>n</sub> can occur several times in one state sequence.
                    </GreenListItem>

                    <GreenListItem title="Observation sequence">
                        The observation sequence is defined as <b>{utility.blankSpace}{utility.O_alone()}</b>= {utility.blankSpace}{utility.curlyLeft}{utility.blankSpace} {utility.O(0)}, {utility.blankSpace}{utility.O(1)}, ..., {utility.blankSpace} {utility.O("T-1")} {utility.curlyRight}.
                        In other words, <b>{utility.blankSpace}{utility.O_alone()}</b>is the set of all the observations being made in one specific
                        sequence. Note that a specific observation O<sub>k</sub> can occur several times in one
                        observation sequence.
                    </GreenListItem>

                    <GreenListItem title="Row-stochastic">
                        By using the word row-stochastic we mean that every row in the
                        current matrix sums up to one. Similarly, the elements in a stochastic vector sums up 
                        to one. Let's define the following two matrices:

                        <Matrix 
                            matrixName={<span>x<sub>i,j</sub></span>} 
                            matrix= {[
                                [0.3, 0.35, 0.53],
                                [0.43, 0.12, 0.31],
                                [0.12, 0.48, 0.37]
                            ]}
                            themeColor="black" 
                        />

                        <Matrix 
                            matrixName={<span>y<sub>i,j</sub></span>} 
                            matrix= {[
                                [0.3, 0.3, 0.4],
                                [0.25, 0.25, 0.50],
                                [0.1, 0.1, 0.8]
                            ]}
                            themeColor="black" 
                        />

                        Are these two matrices row-stochastic? Let's find out!

                        <MathContent>
                            <span>x<sub>0,0</sub> + x<sub>0,1</sub> + x<sub>0,2</sub> =</span> 
                            0.3 + 0.35 + 0.53 = 1.18
                        </MathContent>
                        <MathContent>
                            <span>x<sub>1,0</sub> + x<sub>1,1</sub> + x<sub>1,2</sub> =</span> 
                            0.43 + 0.12 + 0.31 = 0.86
                        </MathContent>
                        <MathContent>
                            <span>x<sub>2,0</sub> + x<sub>2,1</sub> + x<sub>2,2</sub> =</span> 
                            0.12 + 0.48 + 0.37 = 0.97
                        </MathContent>

                        <MathContent>
                            <span>y<sub>0,0</sub> + y<sub>0,1</sub> + y<sub>0,2</sub> =</span> 
                            0.3 + 0.3 + 0.4 = 1
                        </MathContent>
                        <MathContent>
                            <span>y<sub>1,0</sub> + y<sub>1,1</sub> + y<sub>1,2</sub> =</span> 
                            0.25 + 0.25 + 0.5 = 1
                        </MathContent>
                        <MathContent extraStyle={{"marginBottom":"10px"}}>
                            <span>y<sub>2,0</sub> + y<sub>2,1</sub> + y<sub>2,2</sub> =</span> 
                            0.1 + 0.1 + 0.8 = 1
                        </MathContent>

                        As we can see, the matrix <span>x<sub>i,j</sub></span> is row-stochastic while <span>y<sub>i,j</sub></span> is not.
                    </GreenListItem>
                </ul>
            </Subsection>
        
            <Subsection 
                header = "HMM Parameters" 
                maxHeight="2000px" 
                hideDefault={false}
            >
                <ul className={classes.listStyle}>
                    <GreenListItem title="Initial state distribution">
                        The initial state distribution, which is sometimes called
                        initial state probabilities, is a vector containing probabilities of being in a certain state
                        at the initial time step t<sub>0</sub>. The initial state distribution is denoted π and the vector is
                        defined as [ {utility.blankSpace}{utility.pi(0)} {utility.blankSpace} {utility.pi(0)} • • • {utility.blankSpace} {utility.pi(<div style={{"display":"inline", "color":"#6EC668"}}><b style={{"color":"#6EC668"}}>N</b>-1</div>)}], 
                        where <b>N</b> is the number of states. The initial state
                        distribution vector is always row-stochastic. Let's make an example:
                        
                        <MathContent extraStyle={{"margin":"0 0 0 0"}}>
                            <Vector vectorName={utility.pi("i")} vector={[0.42, 0.12, 0.46]} themeColor="green" />
                        </MathContent>

                        The initial state distribution given above should be interpreted in the following way: the
                        probability of being in state S<sub>0</sub> at time t<sub>0</sub> is 0.42, the probability of being in state 
                        S<sub>1</sub> at
                        time t<sub>0</sub> is 0.12 and the probability of being in state S<sub>2</sub> at time t<sub>0</sub> is 0.46.
                        We can also
                        see that the vector is stochastic because 0.42 + 0.12 + 0.46 = 1.0. If we want, we can
                        also write the probabilities with the following notation:
                        
                        <MathContent extraStyle={{"margin":"0 0 0 0"}}>
                            {utility.pi("0")} = 0.42
                        </MathContent>

                        <MathContent extraStyle={{"margin":"0 0 0 0"}}>
                            {utility.pi("1")} = 0.12
                        </MathContent>

                        <MathContent extraStyle={{"margin":"0 0 0 0"}}>
                            {utility.pi("2")} = 0.46
                        </MathContent>

                        <ImportantInfo extraStyle={{"width":"100%"}}>
                            The initial state distribution {utility.blankSpace}{utility.pi_alone()}is stochastic.
                        </ImportantInfo>
                    </GreenListItem>

                    <GreenListItem title="Transition matrix">
                        The transition matrix {utility.A_alone()}, or {utility.a("i,j")}, is used to store probabilities when
                        traveling between different states. E.g. if {utility.A_alone()}{utility.brackets("0", "black", "red")}{utility.brackets("2", "black", "red")}
                        = 0.37, the probability of traveling
                        from S<sub>0</sub> to S<sub>2</sub> between any given time steps is 0.37. As seen above we can express the
                        transition matrix as:
                        
                        <MathContent extraStyle={{"margin":"5px 0"}}>
                            {utility.a("i,j")}{utility.blankSpace}={utility.blankSpace}{utility.A_alone()}{utility.brackets("i", "black", "red")}{utility.brackets("j", "black", "red")} =
                            𝑃({utility.S("t")}{utility.blankSpace}={utility.blankSpace}{utility.S_black("j")}{utility.blankSpace}|
                            {utility.blankSpace}{utility.S("t-1")}{utility.blankSpace}={utility.blankSpace}{utility.S_black("i")})
                        </MathContent>

                        This reads as <i>"the value positioned at the ith row and at the jth column in the
                        transition matrix {utility.A_alone()} is the probability that we are in state number j <b>given</b> that we
                        were in state number i in the previous time step"</i>.

                        <ImportantInfo extraStyle={{"width":"100%"}}>
                            The initial state distribution {utility.A_alone()} is stochastic.
                        </ImportantInfo>

                        Let's look at an example:

                        <Matrix 
                            matrixName={utility.a("i,j")} 
                            matrix= {[
                                [0.22, 0.41, 0.37],
                                [0.43, 0.12, 0.45],
                                [0.14, 0.48, 0.38]
                            ]}
                            themeColor="red"
                        />

                        By just looking at the matrix we can see that there are three number of possible states.
                        The following figure is a clarification of the same transition matrix:

                        <VisualMatrix 
                            matrixName={utility.A_alone()}
                            matrix={[
                                [0.22, 0.41, 0.37],
                                [0.43, 0.12, 0.45],
                                [0.14, 0.48, 0.38]
                            ]}
                            horizontalImages={[utility.S_black(0), utility.S_black(1), utility.S_black(2)]}
                            themeColor="red"
                            verticalImages={[utility.S_black(0), utility.S_black(1), utility.S_black(2)]}
                            weatherExampleSelected = {false}
                        />
                    </GreenListItem>
                </ul>
            </Subsection>
        </div>
    )
}

export default Theory;