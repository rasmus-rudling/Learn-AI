import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import classes from './examples.module.scss';
import * as util from '../../../Common/utility';

import theBasicsBackgroundImage from '../../../../Resources/Images/Backgrounds/bg5.png';

import runnerExampleTransition from '../../../../Resources/Other/runner-example.svg';
import weatherExampleTransition from '../../../../Resources/Other/weatherExampleStates.svg';

import runnerExampleObservations from '../../../../Resources/Other/runnerExampleObservations.svg';
import weatherExampleObservations from '../../../../Resources/Other/weatherExampleObservations.svg';

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
import ExampleButtons from '../../../Common/ExampleButtons/exampleButtons';


const Examples = () => {
    const [weatherExampleSelected, setWeatherExampleSelected] = useState(false);
    const [exampleSubscript, setExampleSubscript] = useState("R");
    const [examplePi, setExamplePi] = useState(util.runnerPiVector);
    const [exampleA, setExampleA] = useState(util.runnerAMatrix);
    const [exampleB, setExampleB] = useState(util.runnerBMatrix);
    const [exampleAlphaVector, setExampleAlphaVector] = useState(util.runnerAlphaVector)
    const [exampleStatesImages, setExampleStatesImages] = useState(util.runnerStatesImages);
    const [exampleObservationsImages, setExampleObservationsImages] = useState(util.runnerObservationsImages);
    const [exampleObservationSequence, setExampleObservationSequence] = useState(util.runnerObservationSequence);
    const [exampleAlphaSums, setExampleAlphaSums] = useState(util.runnerAlphaSums);
    const [observationsSequenceInText, setObservationsSequenceInText] = useState(null);
    const [observationsSequenceInImages, setObservationsSequenceInImages] = useState(null);
    const [statesImagesInText, setStatesImagesInText] = useState(null);

    const changeObservationSequenceInText = (_weatherExampleSelected) => {
        let _exampleObservationSequence = _weatherExampleSelected ? util.runnerObservationSequence : util.weatherObservationSequence;
        let _exampleObservationsImages = _weatherExampleSelected ? util.runnerObservationsImages : util.weatherObservationsImages ;
        let _exampleStatesImages = _weatherExampleSelected ? util.runnerStatesImages : util.weatherStatesImages;

        setObservationsSequenceInText(
            <mark> 
                {"{ "}
                    {_exampleObservationSequence.map((observationIndex, i) => {
                        if (i + 1 !== _exampleObservationSequence.length) {
                            return <span key={i}>{util.O_black(observationIndex)}, </span>
                        } else {
                            return <span key={i}>{util.O_black(observationIndex)} </span>
                        }
                        
                    })}
                {"}"}
            </mark>
        );

        setObservationsSequenceInImages (
            <mark> 
                {"{ "}
                    {_exampleObservationSequence.map((observationIndex, i) => {
                        if (i + 1 !== _exampleObservationSequence.length) {
                            return <div className="exampleImageInText" key={i}><img 
                                src={_exampleObservationsImages[observationIndex]} alt="Observation" />, </div>
                        } else {
                            return <div className="exampleImageInText" key={i}><img 
                                src={_exampleObservationsImages[observationIndex]} alt="Observation" /></div>
                        }
                    })}
                {"}"}
            </mark>
        );

        setStatesImagesInText (
            <mark> 
                {"{ "}
                    {_exampleStatesImages.map((image, i) => {
                        if (i + 1 !== _exampleStatesImages.length) {
                            return <div className="exampleImageInText" key={i}><img 
                                src={image} alt="Observation" />, </div>
                        } else {
                            return <div className="exampleImageInText" key={i}><img 
                                src={image} alt="Observation" /></div>
                        }
                    })}
                {"}"}
            </mark>
        );
    }

    const setVectorsForExamples = (_weatherExampleSelected) => {
        changeObservationSequenceInText(_weatherExampleSelected);

        if (!_weatherExampleSelected) {
            setExampleSubscript("W")
            setExamplePi(util.weatherPiVector);
            setExampleA(util.weatherAMatrix);
            setExampleB(util.weatherBMatrix);
            setExampleStatesImages(util.weatherStatesImages);
            setExampleObservationsImages(util.weatherObservationsImages);
            setExampleObservationSequence(util.weatherObservationSequence);
            setExampleAlphaVector(util.weatherAlphaVector);
            setExampleAlphaSums(util.weatherAlphaSums);
        } else {
            setExampleSubscript("R")
            setExamplePi(util.runnerPiVector);
            setExampleA(util.runnerAMatrix);
            setExampleB(util.runnerBMatrix);
            setExampleStatesImages(util.runnerStatesImages);
            setExampleObservationsImages(util.runnerObservationsImages);
            setExampleObservationSequence(util.runnerObservationSequence);
            setExampleAlphaVector(util.runnerAlphaVector);
            setExampleAlphaSums(util.runnerAlphaSums);
        }
    }

    const handleChangeActiveExample = () => {
        setVectorsForExamples(weatherExampleSelected);
        setWeatherExampleSelected(!weatherExampleSelected);
    }

    useEffect(() => {
        setVectorsForExamples(true);
        changeObservationSequenceInText(true);
    }, []);


    return (
        <div>
            <img src = {theBasicsBackgroundImage} className="backgroundImage" alt="" />
            <HomeButton extraClass={classes.homeButton}/>

            <h1>{weatherExampleSelected ? "Weather Example" : "Runner Example"}</h1>
            <BackButton />

            <ExampleButtons 
                weatherExampleSelected={weatherExampleSelected} 
                handleChangeActiveExample={handleChangeActiveExample} 
            />

            <h2 style={{"color":"#2d2d2d", "fontWeight":"400", "fontSize":"1.35rem"}}>Probabilities of state transitions</h2>

            <img src={weatherExampleSelected ? weatherExampleTransition : runnerExampleTransition} style={{"width":"750px", "margin":"20px auto 50px", "display":"block"}} />
            
            {
                weatherExampleSelected ?
                <Subsection
                    header = "Intuitive meaning" 
                    hideDefault={true}
                >
                    <ul className={classes.intuitiveMeaning}>
                        <li>
                            If it's <mark className="yellow">sunny</mark> at t<sub>x</sub>, the probability of <mark className="yellow">sun</mark> at t<sub>x+1</sub> is <mark className="yellow">0.42</mark>, 
                            the probability of <mark className="gray">clouds</mark> at t<sub>x+1</sub> is
                            {util.blankSpace}<mark className="yellow">0.32</mark> and the probability of <mark className="blue">rain</mark> at t<sub>x+1</sub> is <mark className="yellow">0.26</mark>.
                        </li>

                        <li>
                            If it's <mark className="blue">rainy</mark> at t<sub>x</sub>, the probability of <mark className="yellow">sun</mark> at t<sub>x+1</sub> is <mark className="blue">0.49</mark>, the probability of <mark className="gray">clouds</mark> at t<sub>x+1</sub> is
                            {util.blankSpace}<mark className="blue">0.33</mark> and the probability of <mark className="blue">rain</mark> at t<sub>x+1</sub> is <mark className="blue">0.18</mark>.
                        </li>

                        <li>
                            If it's <mark className="gray">cloudy</mark> at t<sub>x</sub>, the probability of <mark className="yellow">sun</mark> at t<sub>x+1</sub> is <mark className="gray">0.25</mark>, the probability of <mark className="gray">clouds</mark> at t<sub>x+1</sub> is
                            {util.blankSpace}<mark className="gray">0.4</mark> and the probability of <mark className="blue">rain</mark> at t<sub>x+1</sub> is <mark className="gray">0.35</mark>.
                        </li>
                    </ul>
                </Subsection>
                    :
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
            }
            

            <h2 style={{"color":"#2d2d2d", "fontWeight":"400", "fontSize":"1.35rem"}}>Observation probabilities given state</h2>
            <img 
                src={weatherExampleSelected ? weatherExampleObservations : runnerExampleObservations} 
                style={{"width":"750px", "margin":"20px auto 50px", "display":"block"}} 
            />
            
            {
                weatherExampleSelected ?
                    <Subsection
                        header = "Intuitive meaning" 
                        hideDefault={true}
                    >
                        <ul className={classes.intuitiveMeaning}>
                            <li>
                                If the HMM is in the sunny state, the probability of observing <strong>observation 0</strong> is <mark className="yellow">0.17</mark>, 
                                {util.blankSpace}<strong>observation 2</strong> <mark className="yellow">0.37</mark>, <strong>observation 3</strong> <mark className="yellow">0.04</mark>, and
                                {util.blankSpace}<strong>observation 4</strong> <mark className="yellow">0.42</mark>.
                            </li>

                            <li>
                                If the HMM is in the cloudy state, the probability of observing <strong>observation 0</strong> is <mark className="gray">0.24</mark>, 
                                {util.blankSpace}<strong>observation 1</strong> <mark className="gray">0.41</mark>, <strong>observation 2</strong> <mark className="blue">0.09</mark>, <strong>observation 3</strong>
                                {util.blankSpace}<mark className="gray">0.23</mark>, and
                                {util.blankSpace}<strong>observation 4</strong> <mark className="gray">0.03</mark>.
                            </li>

                            <li>
                                If the HMM is in the rainy state, the probability of observing <strong>observation 0</strong> is <mark className="blue">0.11</mark>, 
                                {util.blankSpace}<strong>observation 1</strong> <mark className="blue">0.67</mark>, <strong>observation 2</strong> <mark className="blue">0.04</mark>, <strong>observation 3</strong> <mark className="blue">0.10</mark>, 
                                and <strong>observation 4</strong> <mark className="blue">0.05</mark>.
                            </li>
                        </ul>
                    </Subsection>
                :
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
            }

            
            <Subsection
                header = "HMM parameters" 
                hideDefault={false}
            >
                <ul className="greenList">
                    <GreenListItem title="Initial state distribution">
                        As described in the <Link to={"/hmm/theBasics/theory"}className="linkStyle">theory section</Link>, 
                        the initial state distribution declares the probabilities of being in a certain state at the initial time step
                        t<sub>0</sub>. In this example, the initial state distribution is given by:
                    
                        <Vector vectorName={util.pi("i")} vector={examplePi} themeColor="green" />
                    
                        We define the set of states as <strong>S</strong> = {statesImagesInText}, that is, S<sub>0</sub>{util.blankSpace}
                        = {util.imageInText(exampleStatesImages[0])}, S<sub>1</sub> = {util.imageInText(exampleStatesImages[1])}, S<sub>2</sub> = {util.imageInText(exampleStatesImages[2])} and 
                        {util.blankSpace}{weatherExampleSelected ? null : <mark>S<sub>3</sub> = {util.imageInText(exampleStatesImages[3])}</mark>}. 
                        Now we have the information we need to express the initial state distribution in the following way:

                        <MathContent>
                            {util.pi()}({util.imageInText(exampleStatesImages[0])}) = {util.pi()}({util.S_black(0)}) =
                            𝑃({util.S(0)} = 
                            {util.blankSpace}{util.S_black(0)}) = {examplePi[0]}
                        </MathContent>

                        <MathContent>
                            {util.pi()}({util.imageInText(exampleStatesImages[1])}) = {util.pi()}({util.S_black(1)}) =
                            𝑃({util.S(0)} =
                            {util.blankSpace}{util.S_black(1)}) = {examplePi[1]}
                        </MathContent>

                        <MathContent extraStyle={weatherExampleSelected ? {"marginBottom":"15px"} : null}>
                            {util.pi()}({util.imageInText(exampleStatesImages[2])}) = {util.pi()}({util.S_black(2)}) =
                            𝑃({util.S(0)} =
                            {util.blankSpace}{util.S_black(2)}) = {examplePi[2]}
                        </MathContent>

                        {
                            weatherExampleSelected ? null :

                            <MathContent extraStyle={{"marginBottom":"15px"}}>
                                {util.pi()}({util.imageInText(exampleStatesImages[3])}) = {util.pi()}({util.S_black(3)}) =
                                𝑃({util.S(0)} =
                                {util.blankSpace}{util.S_black(3)}) = {examplePi[3]}
                            </MathContent>
                        }
                        
                        {
                            weatherExampleSelected ?
                                <mark>
                                    So what does this mean? In English we read the above notations as: "at the initial time
                                    step t<sub>0</sub> the probability that the weather is <mark className="yellow">sunny</mark> is 0.435, <mark className="gray">cloudy</mark> 0.125
                                    and <mark className="blue">rainy</mark> 0.440".
                                </mark>
                            :
                                <mark>
                                    So what does this mean? In English we read the above notations as: <i>"at the initial time
                                    step t<sub>0</sub> the probability that Usain Bolt is <mark className="blue">preparing</mark> is 1.0, <mark className="green">accelerating</mark> 0.0, 
                                    {util.blankSpace}<mark className="yellow">decelerating</mark>{util.blankSpace}
                                    0.0, and <mark className="red">standing still</mark> 0.0"</i>.
                                </mark>
                        }
                        
                    </GreenListItem>

                    <GreenListItem title="Transition matrix">
                        We use the transition matrix {util.A()}, or {util.a("i, j")}, to describe the probabilities of transitioning between states. Note that it's
                        possible for a HMM to transition from a certain state to itself. E.g. {util.A()}[ 2 ][ 2 ] would be imply the probability 𝑃({util.S("t")}{util.blankSpace}
                        = {util.S_black("2")} | {util.S("t-1")} = {util.S_black("2")}) which is a valid transition. In this example, we have the following transition matrix:
                    
                        <Matrix matrixName={util.a("i, j")} matrix={exampleA} themeColor="red" />
                        
                        {
                            weatherExampleSelected ?
                                <mark>
                                    If one of the rows would be all zeros, we say that corresponding state is <strong>non-emitting</strong> (also called <strong>silent</strong>) state. 
                                    If an HMM reaches the non-emitting state, the
                                    model stops, because there is nowhere to go from that state. Also, note that when
                                    dealing with non-emitting states, we make an exception to the rule that the transition
                                    matrix need to be row-stochastic.
                                </mark>
                            :
                                <mark>
                                    Note that the last row is filled with zero. This implies that the last state is a <strong>non-emitting</strong> (also called <strong>silent</strong>) state. If the HMM reaches the non-emitting state, the
                                    model stops, because there is nowhere to go from that state. Also, note that when
                                    dealing with non-emitting states, we make an exception to the rule that the transition
                                    matrix need to be row-stochastic.
                                </mark>
                        }

                        <ImportantInfo>
                            We can't transition to any other state from a non-emitting/silent state.
                        </ImportantInfo>

                        To make the transition matrix a little clearer, let's have a look at the following figure
                        which also describes the transition probabilities:

                        <VisualMatrix 
                            matrixName={util.A()}
                            matrix={exampleA}
                            horizontalImages={exampleStatesImages}
                            themeColor="red"
                            verticalImages={exampleStatesImages}
                            weatherExampleSelected = {false}
                        />

                        From this transition matrix we can see that 
                        
                        <MathContent extraStyle={{"margin":"4px 0 5px 0"}}>
                            {util.a("1,2")} = 𝑃({util.S("t")} = {util.S_black("2")} | 
                            {util.blankSpace}{util.S("t-1")} = {util.S_black("1")}) = 𝑃({util.S("t")} =
                            {util.blankSpace}{util.imageInText(exampleStatesImages[1])} | {util.S("t-1")} = 
                            {util.blankSpace}{util.imageInText(exampleStatesImages[2])}) = {exampleA[1][2]}
                        </MathContent>

                        {
                            weatherExampleSelected ?
                                <mark>
                                    Also, note that all rows (except potential non-emmiting rows), sum up to one!
                                </mark>
                            :
                                <mark>
                                    Also, note that all rows, except the last, sum up to one!
                                </mark>
                        }
                        
                    </GreenListItem>

                    <GreenListItem title="Observation matrix">
                        We use the observation matrix {util.B()}, or {util.a("j, k")}, to describe probabilities of making specific observations given that the hidden model is in a particular state.
                        E.g. what is the probability that we observe {util.imageInText(exampleObservationsImages[1])} given that the state {util.imageInText(exampleStatesImages[1])}? In other words what's 
                        𝑃({util.O("t")} = {util.O_black("1")} |
                        {util.blankSpace}{util.S("t")} = {util.S_black("1")} ) = 𝑃({util.O("t")} = {util.imageInText(exampleObservationsImages[1])} | {util.S("t")} = {util.imageInText(exampleStatesImages[1])})?
                        The answer is {exampleB[1][1]}. By looking at all the different states and their probabilities in relation to possible observations we get the observation matrix {util.B()}:

                        <Matrix matrixName={util.b("i, j")} matrix={exampleB} themeColor="blue" />

                        For better understanding we can have a look at the following figure, which we use to
                        clearify the observation matrix:

                        <VisualMatrix 
                            matrixName={util.B()}
                            matrix={exampleB}
                            horizontalImages={exampleObservationsImages}
                            themeColor="blue"
                            verticalImages={exampleStatesImages}
                            weatherExampleSelected = {false}
                        />

                        From this observation matrix we can see that 

                        <MathContent extraStyle={{"margin":"4px 0 5px 0"}}>
                            {util.b("1,3")} = 𝑃({util.O("t")} = {util.O_black("3")} | {util.S("t")} =
                            {util.blankSpace}{util.S_black("1")}) = 𝑃({util.O("t")} = {util.imageInText(exampleObservationsImages[3])} | {util.S("t")} = {util.imageInText(exampleStatesImages[1])}) = {exampleB[1][3]}. 
                        </MathContent>
                        
                        Also, note that all rows sum up to one!
                    </GreenListItem>

                    <GreenListItem title="Lambda">
                        The initial state distribution {util.pi()}, the transition matrix {util.A()} and the observation
                        matrix {util.B()} together describes how Usain Bolt transitions between the states and what
                        observations we can expect when being in some of the states. At last, we can gather
                        the three in {util.lambda()} = {util.curlyLeft} {util.A()}, {util.B()}, {util.pi()} {util.curlyRight}.
                    </GreenListItem>
                </ul>
            </Subsection>

            <ExtraInfo infoType="Food for thought">
                        <i>Why does the observation matrix need to be row-stochastic?</i> To grasp
                        this question we must first accept that each HMM is a simplification of reality. We
                        make simplifications because it allows us to control all the variables in the system we
                        are interested in. When an HMM are in a certain state, we know that the model will make
                        some observation, it's defined that way. We have also defined that all possible
                        observations that can be made are <strong>{util.O()}</strong> = {observationsSequenceInImages}. Therefore, in order for us
                        to know that we make some observation, all separate possibilities for observations must
                        together sum up to one. The same reasoning can be made for the initial state
                        distribution {util.pi()} and for the transition matrix {util.A()}.

                    </ExtraInfo>
        </div>
    )
}

export default Examples;