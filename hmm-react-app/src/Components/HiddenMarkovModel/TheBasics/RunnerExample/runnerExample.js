import React from 'react';
import {Link} from "react-router-dom";

import classes from './runnerExample.module.scss';
import * as utility from '../../../Common/utility';

import theBasicsBackgroundImage from '../../../../Resources/Images/Backgrounds/bg5.png';
import runnerExampleTransition from '../../../../Resources/Other/runner-example.svg';
import runnerExampleObservations from '../../../../Resources/Other/runnerExampleObservations.svg';

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
            
            <Subsection
                header = "Intuitive meaning" 
                hideDefault={true}
            >
                <ul className={classes.intuitiveMeaning}>
                    <li>
                        If Usain Bolt are <mark className="blue">preparing</mark> at t<sub>x</sub>, the probability of him <mark className="blue">preparing</mark> at 
                        t<sub>x+1</sub> is <mark className="blue">0.3</mark> and the probability of him <mark className="green">accelerating</mark> at
                        t<sub>x+1</sub> is <mark className="blue">0.7</mark>.
                    </li>

                    <li>
                        If Usain Bolt are <mark className="green">accelerating</mark> at t<sub>x</sub>, the probability of him <mark className="green">accelerating</mark> at 
                        t<sub>x+1</sub> is <mark className="green">0.8</mark> and the probability of him <mark className="yellow">decelerating</mark> at
                        t<sub>x+1</sub> is <mark className="green">0.2</mark>.
                    </li>

                    <li>
                        If Usain Bolt are <mark className="yellow">decelerating</mark> at t<sub>x</sub>, the probability of him <mark className="yellow">decelerating</mark> at
                        t<sub>x+1</sub> is <mark className="yellow">0.5</mark>, the probability of him <mark className="green">accelerating</mark> at t<sub>x+1</sub> is <mark className="yellow">0.4</mark>, and the probability of him 
                        <mark className="red"> standing still</mark> at t<sub>x+1</sub> is <mark className="yellow">0.1</mark>.
                    </li>

                    <li>
                        If Usain Bolt are <mark className="red">standing still</mark> at t<sub>x</sub>, 
                        we can't make any more predictions.
                    </li>
                </ul>
            </Subsection>

            <h2 style={{"color":"#2d2d2d"}}>Observation probabilities given state</h2>
            <img src={runnerExampleObservations} style={{"width":"750px", "margin":"20px auto 50px", "display":"block"}} />

            <Subsection
                header = "Intuitive meaning" 
                hideDefault={true}
            >
                <ul className={classes.intuitiveMeaning}>
                    <li>
                        If the HMM is in the <mark className="blue">prepare</mark> state, the probability of 
                        observing <strong>observation 0</strong> is <mark className="blue">1.0</mark>.
                    </li>

                    <li>
                        If the HMM is in the <mark className="green">accelerate</mark> state, the probability of observing <strong>observation 0</strong> is
                        <mark className="green"> 0.05</mark>, <strong>observation 1</strong> <mark className="green">0.38</mark>, <strong>observation 2</strong> <mark className="green">0.34</mark>,
                        <strong> observation 3</strong> <mark className="green">0.2</mark> and <strong>observation 4</strong> <mark className="green">0.03</mark>.
                    </li>

                    <li>
                        If the HMM is in the decelerate state, the probability of observing <strong>observation 1</strong> is
                        <mark className="yellow"> 0.05</mark>, <strong>observation 2</strong> <mark className="yellow">0.23</mark>, 
                        <strong> observation 3</strong> <mark className="yellow">0.28</mark> and <strong>observation 4</strong> <mark className="yellow">0.44</mark>.
                    </li>

                    <li>
                        If the HMM is in the stop state, the probability of observing <strong>observation 4</strong> 
                        is <mark className="red">0.18</mark> and <strong>observation 5</strong> <mark className="red">0.82</mark>.
                    </li>
                </ul>
            </Subsection>
            
            <Subsection
                header = "HMM parameters" 
                hideDefault={false}
            >
                <ul className="greenList">
                    <GreenListItem title="Initial state distribution">
                        As described in the <Link to={"/hmm/theBasics/theory"}className="linkStyle">theory section</Link>, 
                        the initial state distribution declares the probabilities of being in a certain state at the initial time step
                        t<sub>0</sub>. In this example, the initial state will always be the <mark className="blue">prepare</mark> state, simply because it's reasonable to 
                        believe that Usain Bolt have to prepare before he starts running.
                        Therefore the initial state distribution is given by:
                    
                        <Vector vectorName={utility.pi("i")} vector={["1", "0", "0", "0"]} themeColor="green" />
                    
                        We define the set of states as <strong><mark className="yellow">S</mark></strong> = {utility.curlyLeft} <mark className="blue">prepare</mark>, 
                        <mark className="green"> accelerate</mark>, <mark className="yellow">decelerate</mark>, <mark className="red">stop</mark> {utility.curlyRight}, that is, S<sub>0</sub>
                        = <mark className="blue">prepare</mark>, S<sub>1</sub> = <mark className="green">accelerate</mark>, S<sub>2</sub> = <mark className="yellow">decelerate</mark> and S<sub>3</sub> = <mark className="red">stop</mark>. 
                        Now we have the information we need to express the initial state distribution in the following way:

                        <MathContent>
                            {utility.pi()} (<mark className="blue">prepare</mark>) ={utility.blankSpace}{utility.pi()}(<mark className="black">S<sub>0</sub></mark>) =
                            𝑃(<mark className="red">S<sub>0</sub></mark>{utility.blankSpace}={utility.blankSpace}
                            <mark className="black">S<sub>0</sub></mark>) = 1
                        </MathContent>

                        <MathContent>
                            {utility.pi()} (<mark className="green">accelerate</mark>) ={utility.blankSpace}{utility.pi()}(<mark className="black">S<sub>1</sub></mark>) =
                            𝑃(<mark className="red">S<sub>0</sub></mark>{utility.blankSpace}={utility.blankSpace}
                            <mark className="black">S<sub>1</sub></mark>) = 0
                        </MathContent>

                        <MathContent>
                            {utility.pi()} (<mark className="yellow">decelerate</mark>) ={utility.blankSpace}{utility.pi()}(<mark className="black">S<sub>2</sub></mark>) =
                            𝑃(<mark className="red">S<sub>0</sub></mark>{utility.blankSpace}={utility.blankSpace}
                            <mark className="black">S<sub>2</sub></mark>) = 0
                        </MathContent>

                        <MathContent extraStyle={{"marginBottom":"15px"}}>
                            {utility.pi()} (<mark className="red">decelerate</mark>) ={utility.blankSpace}{utility.pi()}(<mark className="black">S<sub>3</sub></mark>) =
                            𝑃(<mark className="red">S<sub>0</sub></mark>{utility.blankSpace}={utility.blankSpace}
                            <mark className="black">S<sub>3</sub></mark>) = 0
                        </MathContent>
                        
                        So what does this mean? In English we read the above notations as: <i>"at the initial time
                        step t<sub>0</sub> the probability that Usain Bolt is <mark className="blue">preparing</mark> is 1.0, <mark className="green">accelerating</mark> 0.0, 
                        {utility.blankSpace}<mark className="yellow">decelerating</mark>{utility.blankSpace}
                        0.0, and <mark className="red">standing still</mark> 0.0"</i>.
                    </GreenListItem>

                    <GreenListItem title="Transition matrix">
                        We use the transition matrix {utility.A()}, or {utility.a("i, j")}, to describe the probabilities of transitioning between states. Note that it's
                        possible for a HMM to transition from a certain state to itself. E.g. {utility.A()}[ 2 ][ 2 ] would be imply the probability 𝑃({utility.S("t")}{utility.blankSpace}
                        = {utility.S_black("2")} | {utility.S("t-1")} = {utility.S_black("2")}) which is a valid transition. In this example, we have the following transition matrix:
                    
                        <Matrix matrixName={utility.a("i, j")} matrix={utility.runnerAMatrix} themeColor="red" />

                        Note that the last row is filled with zero. This implies that the last state is a <strong>nonemitting</strong> (also called <strong>silent</strong>) state. If the HMM reaches the non-emitting state, the
                        model stops, because there is nowhere to go from that state. Also, note that when
                        dealing with non-emitting states, we make an exception to the rule that the transition
                        matrix need to be row-stochastic.

                        <ImportantInfo>
                            We can't transition to any other state from a non-emitting/silent state.
                        </ImportantInfo>

                        To make the transition matrix a little clearer, let's have a look at the following figure
                        which also describes the transition probabilities:

                        <VisualMatrix 
                            matrixName={utility.A()}
                            matrix={utility.runnerAMatrix}
                            horizontalImages={utility.runnerStatesImages}
                            themeColor="red"
                            verticalImages={utility.runnerStatesImages}
                            weatherExampleSelected = {false}
                        />

                        From this transition matrix we can see that 
                        
                        <MathContent extraStyle={{"margin":"4px 0 5px 0"}}>
                            {utility.a("1,2")} = 𝑃({utility.S("t")} = {utility.S_black("2")} | 
                            {utility.blankSpace}{utility.S("t-1")} = {utility.S_black("1")}) = 𝑃({utility.S("t")} =
                            {utility.blankSpace}<mark className="yellow">decelerate</mark> | {utility.S("t-1")} = 
                            {utility.blankSpace}<mark className="green">accelerate</mark>) = 0.2
                        </MathContent>

                        Also, note that all rows, except the last, sum up to one!
                    </GreenListItem>

                    <GreenListItem title="Observation matrix">
                        We use the observation matrix {utility.B()}, or {utility.a("j, k")}, to describe probabilities of making specific observations given that the hidden model is in a particular state.
                        E.g. what is the probability that we observe {utility.imageInText(utility.runnerObservationsImages[1])} given that the he are <mark className="green">accelerating</mark>? In other words what's 
                        𝑃({utility.O("t")} = {utility.O_black("1")} |
                        {utility.blankSpace}{utility.S("t")} = {utility.S_black("1")} ) = 𝑃({utility.O("t")} = {utility.imageInText(utility.runnerObservationsImages[1])} | {utility.S("t")} = <mark className="green">accelerating</mark>)?
                        The answer is <mark className="green">0.38</mark>. By looking at all the different states and their probabilities in relation to possible observations we get the observation matrix {utility.B()}:

                        <Matrix matrixName={utility.b("i, j")} matrix={utility.runnerBMatrix} themeColor="blue" />

                        For better understanding we can have a look at the following figure, which we use to
                        clearify the observation matrix:

                        <VisualMatrix 
                            matrixName={utility.B()}
                            matrix={utility.runnerBMatrix}
                            horizontalImages={utility.runnerObservationsImages}
                            themeColor="blue"
                            verticalImages={utility.runnerStatesImages}
                            weatherExampleSelected = {false}
                        />

                        From this observation matrix we can see that 

                        <MathContent extraStyle={{"margin":"4px 0 5px 0"}}>
                            {utility.b("1,4")} = 𝑃({utility.O("t")} = {utility.O_black("4")} | {utility.S("t")} =
                            {utility.blankSpace}{utility.S_black("1")}) = 𝑃({utility.O("t")} = {utility.imageInText(utility.runnerObservationsImages[4])} | {utility.S("t")} = <mark className="green">accelerating</mark>) = 0.03. 
                        </MathContent>
                        
                        Also, note that all rows sum up to one!
                    </GreenListItem>

                    <GreenListItem title="Lambda">
                        The initial state distribution {utility.pi()}, the transition matrix {utility.A()} and the observation
                        matrix {utility.B()} together describes how Usain Bolt transitions between the states and what
                        observations we can expect when being in some of the states. At last, we can gather
                        the three in {utility.lambda()} = {utility.curlyLeft} {utility.A()}, {utility.B()}, {utility.pi()} {utility.curlyRight}.
                    </GreenListItem>
                </ul>
            </Subsection>

            <ExtraInfo infoType="Food for thought">
                        <i>Why does the observation matrix need to be row-stochastic?</i> To grasp
                        this question we must first accept that each HMM is a simplification of reality. We
                        make simplifications because it allows us to control all the variables in the system we
                        are interested in. When an HMM are in a certain state, we know that the model will make
                        some observation, it's defined that way. We have also defined that all possible
                        observations that can be made are <strong>{utility.O()}</strong> = {utility.curlyLeft} 
                        {utility.blankSpace}{utility.imageInText(utility.runnerObservationsImages[0])}, 
                        {utility.blankSpace}{utility.imageInText(utility.runnerObservationsImages[1])}, 
                        {utility.blankSpace}{utility.imageInText(utility.runnerObservationsImages[2])}, 
                        {utility.blankSpace}{utility.imageInText(utility.runnerObservationsImages[3])}, 
                        {utility.blankSpace}{utility.imageInText(utility.runnerObservationsImages[4])}, 
                        {utility.blankSpace}{utility.imageInText(utility.runnerObservationsImages[5])} {utility.curlyRight} . Therefore, in order for us
                        to know that we make some observation, all separate possibilities for observations must
                        together sum up to 1.0. The same reasoning can be made for the initial state
                        distribution {utility.pi()} and for the transition matrix {utility.A()}.

                    </ExtraInfo>
        </div>
    )
}

export default RunnerExample;