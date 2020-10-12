import React, { useEffect, useState } from 'react';
import classes from './forwardAlgorithm.module.scss';

import forwardAlgorithmBG from '../../Resources/Images/Backgrounds/bg2.png';

import * as utility from '../Common/Utility/utility';

// --- COMPONENTS ---
import Subsection from '../Common/Subsection/subsection';
import Vector from '../Common/Vector/vector';
import Matrix from '../Common/Matrix/matrix';
import BackButton from '../Common/BackButton/backButton';
import HomeButton from '../Common/HomeButton/homeButton';
import ExampleButtons from '../Common/ExampleButtons/exampleButtons';
import VisualMatrix from '../Common/VisualMatrix/visualMatrix';
import ImportantInfo from '../Common/ImportantInfo/importantInfo';
import MathContent from '../Common/MathContent/mathContent';
import SumChar from '../Common/SumChar/sumChar';
import ExampleExplanation from '../Common/ExampleExplanation/exampleExplanation';

const ForwardAlgorithm = (props) => {
    const [weatherExampleSelected, setWeatherExampleSelected] = useState(true);
    const [exampleSubscript, setExampleSubscript] = useState("W");
    const [examplePi, setExamplePi] = useState(utility.weatherPiVector);
    const [exampleA, setExampleA] = useState(utility.weatherAMatrix);
    const [exampleB, setExampleB] = useState(utility.weatherBMatrix);
    const [exampleStatesImages, setExampleStatesImages] = useState(utility.weatherStatesImages);
    const [exampleObservationsImages, setExampleObservationsImages] = useState(utility.weatherObservationsImages);
    const [exampleObservationSequence, setExampleObservationSequence] = useState(utility.weatherObservationSequence);
    const [observationsSequenceInText, setObservationsSequenceInText] = useState(null);
    const [observationsSequenceInImages, setObservationsSequenceInImages] = useState(null);
    const [statesImagesInText, setStatesImagesInText] = useState(null);


    const changeObservationSequenceInText = (_weatherExampleSelected) => {
        let _exampleObservationSequence = _weatherExampleSelected ? utility.runnerObservationSequence : utility.weatherObservationSequence;
        let _exampleObservationsImages = _weatherExampleSelected ? utility.runnerObservationsImages : utility.weatherObservationsImages ;
        let _exampleStatesImages = _weatherExampleSelected ? utility.runnerStatesImages : utility.weatherStatesImages;

        setObservationsSequenceInText(
            <span> 
                {"{"}
                    {_exampleObservationSequence.map((observationIndex, i) => {
                        if (i + 1 !== _exampleObservationSequence.length) {
                            return <span key={i}>{utility.O_black(observationIndex)}, </span>
                        } else {
                            return <span key={i}>{utility.O_black(observationIndex)} </span>
                        }
                        
                    })}
                {"}"}
            </span>
        );

        setObservationsSequenceInImages (
            <span> 
                {"{ "}
                    {_exampleObservationSequence.map((observationIndex, i) => {
                        if (i + 1 !== _exampleObservationSequence.length) {
                            return <div className={classes.observationImageInText} key={i}><img 
                                src={_exampleObservationsImages[observationIndex]} alt="Observation" />, </div>
                        } else {
                            return <div className={classes.observationImageInText} key={i}><img 
                                src={_exampleObservationsImages[observationIndex]} alt="Observation" /></div>
                        }
                    })}
                {"}"}
            </span>
        );

        setStatesImagesInText (
            <span> 
                {"{ "}
                    {_exampleStatesImages.map((image, i) => {
                        if (i + 1 !== _exampleStatesImages.length) {
                            return <div className={classes.observationImageInText} key={i}><img 
                                src={image} alt="Observation" />, </div>
                        } else {
                            return <div className={classes.observationImageInText} key={i}><img 
                                src={image} alt="Observation" /></div>
                        }
                    })}
                {"}"}
            </span>
        );
    }


    const setVectorsForExamples = (_weatherExampleSelected) => {
        changeObservationSequenceInText(_weatherExampleSelected);

        if (!_weatherExampleSelected) {
            setExampleSubscript("W")
            setExamplePi(utility.weatherPiVector);
            setExampleA(utility.weatherAMatrix);
            setExampleB(utility.weatherBMatrix);
            setExampleStatesImages(utility.weatherStatesImages);
            setExampleObservationsImages(utility.weatherObservationsImages);
            setExampleObservationSequence(utility.weatherObservationSequence)
        } else {
            setExampleSubscript("R")
            setExamplePi(utility.runnerPiVector);
            setExampleA(utility.runnerAMatrix);
            setExampleB(utility.runnerBMatrix);
            setExampleStatesImages(utility.runnerStatesImages);
            setExampleObservationsImages(utility.runnerObservationsImages);
        }
    }

    useEffect(() => {
        setVectorsForExamples(false);
        changeObservationSequenceInText(false);
    }, []);

    const handleChangeActiveExample = () => {
        setVectorsForExamples(weatherExampleSelected);
        setWeatherExampleSelected(!weatherExampleSelected);
    }
    
    return (
        <div className={classes.ForwardAlgorithm}>
            <img src = {forwardAlgorithmBG} className={classes.backgroundImage}  />
            
            <HomeButton extraClass={classes.homeButton}/>
            <BackButton />

            <h1>Forward Algorithm</h1>

            <ExampleButtons weatherExampleSelected={weatherExampleSelected} handleChangeActiveExample={handleChangeActiveExample} />

            <Subsection header = "About the Forward Algorithm" maxHeight="140px" hideDefault={true}>
                <p>
                    The algoritm is used to solve problems in the category <b>evaluation/filtering</b>. That is, if we want to compute the
                    likelihood 𝑃( {utility.O("0:T-1")} | {utility.lambda("x")} ) = 𝑃( {utility.O("x")} | {utility.lambda("x")} ) = 𝑃( {utility.curlyLeft} {utility.O("0")}, {utility.O("1")}, ..., {utility.O("T-1")}
                    {utility.curlyRight} | {utility.lambda("x")} ). In otherwords, if we want to compute the likelihood of observing a specific sequence of observations given our {utility.lambda("x")}  = {utility.curlyLeft} {utility.A("x")}, {utility.B("x")}, {utility.pi("x")} {utility.curlyRight}.
                </p>
            </Subsection>

            <Subsection header = "Given information" maxHeight="1160px" hideDefault={true}>
                <p>
                    In order to perform the forward algorithm, we first need to know what model we should
                    use to make the evaluation. The currently selected example is the weather example and
                    is what we will use to illustrate the algorithm (you can change example in the top-right
                    corner). The {utility.lambda(exampleSubscript)} for the weather example is presented below (if you haven't already
                    checked out how we got that specific {utility.lambda(exampleSubscript)}, I strongly encourage you to do so <u>here</u>):
                </p>
                
                <Vector vectorName={utility.pi("i")} vector={examplePi} themeColor="green" />
                
                <Matrix matrixName={utility.a("i, j")} matrix={exampleA} themeColor="red" />
                
                <Matrix matrixName={utility.b("j, k")} matrix={exampleB} themeColor="blue" />

                <p>
                    To make things clear, here is two more figures to clarify how the transition matrix {utility.A(exampleSubscript)} and the observation matrix 
                     {utility.B(exampleSubscript)} should be interpreted:
                </p>

                <VisualMatrix 
                    matrixName={utility.A(exampleSubscript)}
                    matrix={exampleA}
                    horizontalImages={exampleStatesImages}
                    themeColor="red"
                    verticalImages={exampleStatesImages}
                    weatherExampleSelected = {weatherExampleSelected}
                />

                <VisualMatrix 
                    matrixName={utility.B(exampleSubscript)}
                    matrix={exampleB}
                    horizontalImages={exampleObservationsImages}
                    themeColor="blue"
                    verticalImages={exampleStatesImages}
                    weatherExampleSelected = {weatherExampleSelected}
                />

                <ImportantInfo>
                    Note that {utility.a("i, j")} = {utility.A("")} and that {utility.b("j, k")} = {utility.B("")}, it's only different notations. 
                </ImportantInfo>
                
                <div>
                    Besides knowing the {utility.lambda(exampleSubscript)}, we need to know what observations is made. In this example,
                    the made observations are {utility.O(exampleSubscript)} =  {observationsSequenceInText} = {observationsSequenceInImages}. 
                    Also, remember that the states at every time step is hidden. That is, we can't observe the states {statesImagesInText}. 
                    However, we can calculate the probabilities of being in them. 
                </div>
            </Subsection>

            <Subsection header = "Information to find" maxHeight="140px" hideDefault={true}>
                The goal of this algorithm is to find out what the likelihood is of observing a certain observation sequence, also called
                the emission sequence. That is, we want to calculate 𝑃( {utility.O(`0:${exampleObservationSequence.length - 1}`)} | {utility.lambda(exampleSubscript)} ) = 
                <br/> 𝑃( <span className={classes.oInText}>O</span> | {utility.lambda(exampleSubscript)} ) = 𝑃( {observationsSequenceInText} | {utility.lambda(exampleSubscript)} ) = 
                𝑃( {observationsSequenceInImages} | {utility.lambda(exampleSubscript)} ).
            </Subsection>

            <Subsection header = "Mathematical derivation" maxHeight={"1475px"} hideDefault={true}>
                <p><i>
                    If you haven't already, check out the <u>Mathematical concepts</u> section to understand the
                    basic mathematics. Also, remember that</i> {utility.S_alone()} = {utility.S("0:T-1")}.
                </p>
                
                <p className={classes.extraLineHeight}>
                    The goal with the forward algorithm is to find the likelihood 𝑃( {utility.O('0:T-1')} | {utility.lambda('x')} ) and more
                    precicely in our case 𝑃( {utility.O(`0:${exampleObservationSequence.length - 1}`)} | {utility.lambda(exampleSubscript)} ). Using 
                    the <b>sum rule</b> we can conclude that
                </p>

                <MathContent>
                    <p style={{"display":"inline"}}>𝑃( {utility.O('0:T-1')} | {utility.lambda('x')} ) =  </p>
                    <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black("T")} ({utility.S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>𝑃( {utility.O('0:T-1')} ⋂ {utility.S_alone()} | {utility.lambda('x')} )</p>
                </MathContent>

                <p>
                    Furthermore, if we apply the <b>product rule</b> we get the following result
                </p>

                <MathContent>
                    <p style={{"display":"inline"}}>
                        𝑃( {utility.O('0:T-1')} | {utility.lambda('x')} ) = {utility.curlyLeft} <i>sum rule {utility.curlyRight}</i> =
                    </p>
                    <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black("T")} ({utility.S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃( {utility.O('0:T-1')} ⋂ {utility.S_alone()} | {utility.lambda('x')} ) = {utility.curlyLeft} <i>product rule {utility.curlyRight}</i> =
                    </p>
                </MathContent>

                <MathContent>
                    = 
                    <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black("T")} ({utility.S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃( {utility.O('0:T-1')}  | {utility.S_alone()} ⋂ {utility.lambda('x')} ) {utility.multiply} 𝑃( {utility.S_alone()} ⋂ {utility.lambda('x')} )
                    </p>
                </MathContent>

                <p>
                    In order to make the expression less complex, we'll now exclude the <span style={{"color":"#E967E0"}}>lambda</span> from the
                    expression. The expression above <i>explicitly</i> says that the expression applies when using
                    a specific {utility.lambda("x")}. From now on, we will <i>implicitly</i> assume that we have a specific {utility.lambda("x")}
                    = {utility.curlyLeft} {utility.A("x")}, {utility.B("x")}, {utility.pi("x")} {utility.curlyRight}. With this in mind, we have the same expression
                </p>

                <MathContent>
                    <p style={{"display":"inline"}}>
                        𝑃({utility.O('0:T-1')}) = {utility.curlyLeft}<i>sum rule{utility.curlyRight}</i> =
                    </p>
                    <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black("T")} ({utility.S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃({utility.O('0:T-1')} ⋂ {utility.S_alone()}) = {utility.curlyLeft}<i>product rule{utility.curlyRight}</i> =
                    </p>
                    <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black("T")} ({utility.S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃({utility.O('0:T-1')}  | {utility.S_alone()}) {utility.multiply} 𝑃({utility.S_alone()}) =
                    </p>
                </MathContent>

                <MathContent>
                    = 
                    <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black("T")} ({utility.S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        ( {utility.pi_alone()}<sub>{utility.S(0)}</sub> {utility.multiply} {utility.a_alone()}<sub>{utility.S(0)},{utility.S(1)}</sub> {utility.multiply}<span> </span> 
                        {utility.a_alone()}<sub>{utility.S(1)},{utility.S(2)}</sub> {utility.multiply} ... {utility.multiply} <span> </span>
                        {utility.a_alone()}<sub>{utility.S("T-2")},{utility.S("T-1")}</sub> {utility.multiply} {utility.b_alone()}<sub>{utility.S(0)},{utility.O(0)}</sub> {utility.multiply} <span> </span>
                        {utility.b_alone()}<sub>{utility.S(1)},{utility.O(1)}</sub> {utility.multiply} ... {utility.multiply} <span> </span>
                        {utility.b_alone()}<sub>{utility.S("T-1")},{utility.O("T-1")}</sub>) = 
                    </p>
                </MathContent>

                <MathContent>
                    = 
                    <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black("T")} ({utility.S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        ( {utility.pi_alone()}{utility.brackets(0, "red", "green")} {utility.multiply} <span> </span>
                        {utility.a_alone()}{utility.brackets(0, "red", "red")}{utility.brackets(1, "red", "red")} {utility.multiply}<span> </span> 
                        {utility.a_alone()}{utility.brackets(1, "red", "red")}{utility.brackets(2, "red", "red")} {utility.multiply} ... {utility.multiply}<span> </span> 
                        {utility.a_alone()}{utility.brackets("T-2", "red", "red")}{utility.brackets("T-1", "red", "red")} {utility.multiply}<span> </span> 

                        {utility.b_alone()}{utility.brackets(0, "red", "blue")}{utility.brackets(0, "blue", "blue")} {utility.multiply}<span> </span> 
                        {utility.b_alone()}{utility.brackets(1, "red", "blue")}{utility.brackets(1, "blue", "blue")} {utility.multiply} ... {utility.multiply}<span> </span> 
                        {utility.b_alone()}{utility.brackets("T-1", "red", "blue")}{utility.brackets("T-1", "blue", "blue")} ) = 
                    </p>
                </MathContent>

                <p>
                    It might be difficult to get your head around what's what in the expression above. To
                    clearify, note that we are summing over all possible permutations {utility.S_black("T")}({utility.S_alone()}) = ST({utility.S("0:T-1")}). ST is
                    the standard notation for denoting the set of all possible permutations of a set. The T in
                    S<sub>T</sub> says how many elements there are in the current set. E.g. if we have the set 𝑋 =
                    {utility.curlyLeft} <b>a</b>, <b>b</b>, <b>c</b> {utility.curlyRight}, then we denote all permutations of 𝑋 by S<sub>3</sub> = 
                    {utility.curlyLeft} (<b>abc</b>), (<b>acb</b>), (<b>bac</b>), (<b>bca</b>), (<b>cab</b>), (<b>cba</b>) {utility.curlyRight}.
                </p>

                <ExampleExplanation 
                    header = {`Further explenation using the ${weatherExampleSelected ? "weather" : "runner"} example`} 
                    maxHeight="390px" 
                    hideDefault={true}
                >
                    These expressions is probably not easy to grasp at first glance, but let's look at the same
                    expressions using our example

                    <MathContent>
                        <span>𝑃( {utility.O(`0:${exampleObservationSequence.length - 1}`)} | {utility.lambda(exampleSubscript)} ) = </span>
                        <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black(exampleA.length)} ({utility.S_alone()})</div>}/>
                        <span>( {utility.pi_alone()}{utility.brackets(0, "red", "green")} {utility.multiply} {utility.blankSpace} </span>
                        { utility.a_alone()}{utility.brackets(0, "red", "red")}{utility.brackets(1, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(1, "red", "red")}{utility.brackets(2, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(2, "red", "red")}{utility.brackets(3, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(3, "red", "red")}{utility.brackets(4, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                    </MathContent> 

                    <MathContent extraStyle = {{"marginTop":"-10px"}}> 
                        {utility.multiply}  {utility.blankSpace}  {utility.b_alone()}{utility.brackets(0, "red", "blue")}{utility.brackets(0, "blue", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        {utility.b_alone()}{utility.brackets(1, "red", "blue")}{utility.brackets(1, "blue", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(2, "red", "blue")}{utility.brackets(2, "blue", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(3, "red", "blue")}{utility.brackets(3, "blue", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(4, "red", "blue")}{utility.brackets(4, "blue", "blue")}  {utility.blankSpace} ) = 
                    </MathContent>

                    <MathContent>
                        =
                        <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black(exampleA.length)} ({utility.S_alone()})</div>}/>
                        <span>( {utility.pi_alone()}{utility.brackets(0, "red", "green")} {utility.multiply} {utility.blankSpace} </span>
                        { utility.a_alone()}{utility.brackets(0, "red", "red")}{utility.brackets(1, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(1, "red", "red")}{utility.brackets(2, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(2, "red", "red")}{utility.brackets(3, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(3, "red", "red")}{utility.brackets(4, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                    </MathContent> 

                    <MathContent extraStyle = {{"marginTop":"-10px"}}> 
                        {utility.multiply}  {utility.blankSpace}  {utility.b_alone()}{utility.brackets(0, "red", "blue")}{utility.brackets(exampleObservationSequence[0], "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        {utility.b_alone()}{utility.brackets(1, "red", "blue")}{utility.brackets(exampleObservationSequence[1], "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(2, "red", "blue")}{utility.brackets(exampleObservationSequence[2], "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(3, "red", "blue")}{utility.brackets(exampleObservationSequence[3], "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(4, "red", "blue")}{utility.brackets(exampleObservationSequence[4], "black", "blue")}  {utility.blankSpace} ) = 
                    </MathContent>

                    <MathContent>
                        =
                        <SumChar top="" bottom={<div>{utility.S_alone()} ∈ {utility.S_black(exampleA.length)} ({utility.S_alone()})</div>}/>
                        <span>( {utility.pi_alone()}{utility.brackets(0, "red", "green")} {utility.multiply} {utility.blankSpace} </span>
                        { utility.a_alone()}{utility.brackets(0, "red", "red")}{utility.brackets(1, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(1, "red", "red")}{utility.brackets(2, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(2, "red", "red")}{utility.brackets(3, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        { utility.a_alone()}{utility.brackets(3, "red", "red")}{utility.brackets(4, "red", "red")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                    </MathContent> 

                    <MathContent extraStyle = {{"marginTop":"-10px"}}> 
    {utility.multiply}  {utility.blankSpace}    {utility.b_alone()}{utility.brackets(0, "red", "blue")}{utility.brackets(utility.imageInText(exampleObservationsImages[0]), "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}  
                        {utility.b_alone()}{utility.brackets(1, "red", "blue")}{utility.brackets(utility.imageInText(exampleObservationsImages[1]), "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(2, "red", "blue")}{utility.brackets(utility.imageInText(exampleObservationsImages[2]), "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(3, "red", "blue")}{utility.brackets(utility.imageInText(exampleObservationsImages[3]), "black", "blue")}  {utility.blankSpace}  {utility.multiply}  {utility.blankSpace}   
                        {utility.b_alone()}{utility.brackets(4, "red", "blue")}{utility.brackets(utility.imageInText(exampleObservationsImages[4]), "black", "blue")}  {utility.blankSpace} )
                    </MathContent>
                </ExampleExplanation>

                <p>
                    There are two algorithms that will return the desired likelihood: the <b>forward algorithm </b> 
                     (also called <b>α-pass</b>) and the <u>backward algorithm</u> (also called <u>β-pass</u>). In this section we
                    will discuss the <b>forward algorithm</b>.
                </p>
            </Subsection>
        
            <Subsection header = "The Forward Algorithm / α-pass" maxHeight="2000px" hideDefault={false}>
                <p>
                    <i>Remember that <b>S</b> denotes the set of all possible states.</i>
                </p>

                <p>
                    At each time step, we will use {utility.alpha_orange("t", "i")} to declare the likelihood of observing a partial
                    sequence of observables {utility.curlyLeft} {utility.O(0)}, {utility.O(1)}, …, {utility.O("t")} {utility.curlyRight} {utility.blankSpace} 
                    AND at time t, being in state {utility.S_black("i")}. To calculate the
                    likelihood of observing a specific observations sequence up until time step t, we need to
                    know the likelihood of being in some state at time step t. Because if we don't care at
                    which states we are at different time steps, only their total likelihood counts. Therefore,
                    the likelihood of observing a specific observation sequence is the sum of {utility.blankSpace} 
                    {utility.alpha_orange("t", "i")} ∀ {utility.S_black("i")} ∈ {utility.curlyLeft} {utility.S_black("0")}, {utility.blankSpace}  
                    {utility.S_black("1")}, …, {utility.blankSpace} {utility.S_black("N-1")} {utility.curlyRight}. That is
                </p>

                <MathContent>
                    𝑃( {utility.blankSpace} {utility.O('0:t')} {utility.blankSpace} | {utility.blankSpace} {utility.lambda('x')} {utility.blankSpace} ) = 
                    <SumChar top="" bottom={<div>{utility.S_black("i")} ∈ <b>{utility.S_black()}</b></div>}/>
                    {utility.alpha_orange("t", "i")}
                </MathContent>

                <p>
                    Hence, the likelihood
                </p>

                <MathContent>
                    𝑃( {utility.blankSpace} {utility.O('0:T-1')} {utility.blankSpace} | {utility.blankSpace} {utility.lambda('x')} {utility.blankSpace} ) = 
                    <SumChar top="" bottom={<div>{utility.S_black("i")} ∈ <b>{utility.S_black()}</b></div>}/>
                    {utility.alpha_orange("T-1", "i")}
                </MathContent>

                <p>
                    Now when we got that covered, how do we calculate {utility.alpha_orange("t", "i")}? Let's have a look
                </p>

                <MathContent>
                    {utility.alpha_orange("t", "i")} {utility.blankSpace} = 𝑃({utility.O('0:T-1')} {utility.blankSpace} ⋂ {utility.blankSpace} {utility.S("t")} = {utility.S_black("i")} {utility.blankSpace} | {utility.blankSpace} 
                    {utility.lambda("x")} ) ∀ t ∈  {utility.blankSpace} {utility.curlyLeft} 0, 1, ..., T-1 {utility.curlyRight} {utility.blankSpace}  = 
                </MathContent>

                <MathContent extraStyle = {{"marginTop":"-5px", "marginBottom":"10px"}}>
                    = {utility.blankSpace} {utility.curlyLeft} <i>implicitly taking</i> {utility.blankSpace} {utility.lambda("x")} {utility.blankSpace} <i> into account </i> {utility.curlyRight} {utility.blankSpace} = {utility.blankSpace}  
                    𝑃({utility.O('0:T-1')} {utility.blankSpace} ⋂ {utility.blankSpace}  
                    {utility.S("t")} = {utility.S_black("i")} ) ∀ t ∈ {utility.blankSpace} {utility.curlyLeft} 0, 1, ..., T-1 {utility.curlyRight}
                </MathContent> 

                <p>
                    That is, {utility.alpha_orange("t", "i")} is the likelihood of observing a partial sequence of observables 
                    {utility.curlyLeft} {utility.O('0')}, {utility.O('1')}, …, {utility.O('t')} {utility.curlyRight} AND at time t, being in state {utility.S_black("i")}.
                </p>

                <h4>The first time step</h4>

                <p>
                    The forward algorithm uses previous alphas to calculate the current alpha. Therefore,{utility.blankSpace}
                    {utility.alpha_orange("0", "i")} is a base case in this algorithm, because what previous information could we
                    possibly have before we even start? {utility.alpha_orange("0", "i")} is defined as
                </p>

                <MathContent extraStyle={{"margin":"0 0 5px 0"}}>
                    {utility.alpha_orange("0", "i")} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis("i")} {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                    {utility.b_parenthesis("i", utility.O('0'))} {utility.blankSpace} = 𝑃({utility.S(0)} = {utility.S_black("i")}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                    𝑃({utility.O('0')} {utility.blankSpace} | {utility.blankSpace} {utility.S(0)} = {utility.S_black("i")})
                </MathContent>

                <p>
                    I.e. the likelihood of observing {utility.O(0)} AND at time 0, being in state S<sub>i</sub> is equivalent to the
                    probability of being in S<sub>i</sub> at time 0 multiplied with the probability of observing {utility.O(0)} given
                    that we actually were in state S<sub>i</sub>.
                </p>

                <ExampleExplanation
                    header = {`Further explenation using the ${weatherExampleSelected ? "weather" : "runner"} example`} 
                    maxHeight="865px" 
                    hideDefault={true}
                >
                    <p>
                        To make things a little clearer, let's look at our example. We know that {utility.O(0)} = O<sub>0</sub> ={utility.blankSpace}
                        {utility.imageInText(exampleObservationsImages[0])}. That is, at time step 0, we observe{utility.blankSpace} 
                        {utility.imageInText(exampleObservationsImages[0])}. Now, let's calculate all alphas at time 0
                    </p>
                    
                    {/* --- ALPHA(S0) --- */}
                    <MathContent extraStyle={{"margin":"10px 0 5px 0"}}>
                        {utility.alpha_orange("0", "0")} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(0))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O('0'))} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(0))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O_black('0'))} {utility.blankSpace} =
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.S_black("0")}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.O_black('0')} {utility.blankSpace} | {utility.blankSpace} {utility.S(0)} = {utility.S_black("0")})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.imageInText(exampleStatesImages[0])}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.imageInText(exampleObservationsImages[0])} | {utility.blankSpace} {utility.S(0)} = {utility.imageInText(exampleStatesImages[0])})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                    = {examplePi[0]} {utility.blankSpace} {utility.multiply} {utility.blankSpace} {exampleB[0][0]} = {examplePi[0] * exampleB[0][0]}
                    </MathContent>

                    {/* --- ALPHA(S1) --- */}
                    <MathContent extraStyle={{"margin":"10px 0 5px 0"}}>
                        {utility.alpha_orange("0", "1")} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(1))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O('0'))} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(1))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O_black('0'))} {utility.blankSpace} =
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.S_black("1")}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.O_black('0')} {utility.blankSpace} | {utility.blankSpace} {utility.S(0)} = {utility.S_black("1")})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.imageInText(exampleStatesImages[1])}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.imageInText(exampleObservationsImages[0])} | {utility.blankSpace} {utility.S(0)} = {utility.imageInText(exampleStatesImages[1])})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = {examplePi[1]} {utility.blankSpace} {utility.multiply} {utility.blankSpace} {exampleB[1][0]} = {examplePi[1] * exampleB[1][0]}
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                    </MathContent>
                    

                    {/* --- ALPHA(S2) --- */}
                    <MathContent extraStyle={{"margin":"10px 0 5px 0"}}>
                        {utility.alpha_orange("0", "2")} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(2))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O('0'))} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(2))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O_black('0'))} {utility.blankSpace} =
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.S_black("2")}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.O_black('0')} {utility.blankSpace} | {utility.blankSpace} {utility.S(0)} = {utility.S_black("2")})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.imageInText(exampleStatesImages[2])}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.imageInText(exampleObservationsImages[0])} | {utility.blankSpace} {utility.S(0)} = {utility.imageInText(exampleStatesImages[2])})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                    = {examplePi[2]} {utility.blankSpace} {utility.multiply} {utility.blankSpace} {exampleB[2][0]} = {examplePi[2] * exampleB[2][0]}
                    </MathContent>

                    {/* --- ALPHA(S3) --- */}
                    {!weatherExampleSelected ? <div>
                    <MathContent extraStyle={{"margin":"10px 0 5px 0"}}>
                        {utility.alpha_orange("0", "3")} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(3))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O('0'))} {utility.blankSpace} = {utility.blankSpace} {utility.pi_parenthesis(utility.S_black(3))} 
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {utility.b_parenthesis("0", utility.O_black('0'))} {utility.blankSpace} =
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.S_black("3")}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.O_black('0')} {utility.blankSpace} | {utility.blankSpace} {utility.S(0)} = {utility.S_black("3")})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                        = 𝑃({utility.S(0)} = {utility.imageInText(exampleStatesImages[3])}) {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.imageInText(exampleObservationsImages[0])} | {utility.blankSpace} {utility.S(0)} = {utility.imageInText(exampleStatesImages[3])})
                    </MathContent>

                    <MathContent extraStyle={{"margin":"-5px 0 5px 0"}}>
                    = {examplePi[3]} {utility.blankSpace} {utility.multiply} {utility.blankSpace} {exampleB[3][0]} = {examplePi[3] * exampleB[3][0]}
                    </MathContent> </div> : null}

                    <p>
                        Now we can summarize the results in a vector
                    </p>

                    <MathContent extraStyle={{"margin":"-5px 0 -5px 0"}}>
                        <Vector 
                            vectorName={utility.alpha_orange("0", "i")} 
                            vector={ weatherExampleSelected ? 
                                [examplePi[0] * exampleB[0][0], examplePi[1] * exampleB[1][0], examplePi[2] * exampleB[2][0]] :
                                [examplePi[0] * exampleB[0][0], examplePi[1] * exampleB[1][0], examplePi[2] * exampleB[2][0], examplePi[3] * exampleB[3][0]] 
                            }
                                themeColor="orange" />
                    </MathContent>

                    <p>
                        With these results we can now calculate the total likelihood of observing a{utility.blankSpace}
                        {utility.imageInText(exampleObservationsImages[0])} at time {utility.blankSpace} step 0
                    </p>

                    <MathContent extraStyle={{"margin":"-10px 0 0px 0"}}>
                        𝑃({utility.O('0')} {utility.blankSpace} = {utility.blankSpace}{utility.imageInText(exampleObservationsImages[0])}) = 
                        {utility.blankSpace} {utility.alpha_orange("0", utility.S_black(0))}{utility.blankSpace} +{utility.blankSpace} 
                        {utility.alpha_orange("0", utility.S_black(1))}{utility.blankSpace} +{utility.blankSpace} 
                        {utility.alpha_orange("0", utility.S_black(2))}{utility.blankSpace}
                        {!weatherExampleSelected ? <span> + {utility.alpha_orange("0", utility.S_black(3))}{utility.blankSpace} </span> : null} =
                    </MathContent>

                    <MathContent extraStyle={{"margin":"0px 0 -5px 0"}}>
                        = 
                        {utility.blankSpace} {utility.alpha_orange("0", utility.imageInText(exampleStatesImages[0]))}{utility.blankSpace} +{utility.blankSpace} 
                        {utility.alpha_orange("0", utility.imageInText(exampleStatesImages[1]))}{utility.blankSpace} +{utility.blankSpace} 
                        {utility.alpha_orange("0", utility.imageInText(exampleStatesImages[2]))}{utility.blankSpace} 
                        {!weatherExampleSelected ? <span> + {utility.alpha_orange("0", utility.imageInText(exampleStatesImages[3]))}{utility.blankSpace} </span> : null} =
                    </MathContent>

                    <MathContent extraStyle={{"margin":"0px 0 -5px 0"}}>
                        {weatherExampleSelected ? 
                            <div>
                                = {examplePi[0] * exampleB[0][0]} + {examplePi[1] * exampleB[1][0]} + {examplePi[2] * exampleB[2][0]} ={utility.blankSpace}
                                {utility.roundTo((examplePi[0] * exampleB[0][0]) + (examplePi[1] * exampleB[1][0]) + (examplePi[2] * exampleB[2][0]), 10)}
                            </div> :

                            <div>
                                = {examplePi[0] * exampleB[0][0]} + {examplePi[1] * exampleB[1][0]} + {examplePi[2] * exampleB[2][0]} + {examplePi[3] * exampleB[3][0]} ={utility.blankSpace}
                                {utility.roundTo((examplePi[0] * exampleB[0][0]) + (examplePi[1] * exampleB[1][0]) + (examplePi[2] * exampleB[2][0]) + (examplePi[3] * exampleB[3][0]), 10)}
                            </div>
                        }
                    </MathContent>
                </ExampleExplanation>

                <h4 className={classes.noUpperCase}>STEPS 1 ≤ t ≤ T-1</h4>
                
                <p>
                    For the remaining time steps, the new alpha we calculate is dependent on the previous
                    alphas and is defined as
                </p>
            </Subsection>
        </div>
    );
}

export default ForwardAlgorithm;