import React, { useEffect, useState } from 'react';
import classes from './forwardAlgorithm.module.scss';

import forwardAlgorithmBG from '../../Resources/Images/Backgrounds/bg2.png';

import {
    weatherPiVector, 
    weatherAMatrix, 
    weatherBMatrix, 
    weatherStatesImages, 
    weatherObservationsImages,
    weatherObservationSequence
} from '../../App';

import {
    runnerPiVector,
    runnerAMatrix, 
    runnerBMatrix, 
    runnerStatesImages, 
    runnerObservationsImages,
    runnerObservationSequence
} from '../../App';


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
    const [examplePi, setExamplePi] = useState(weatherPiVector);
    const [exampleA, setExampleA] = useState(weatherAMatrix);
    const [exampleB, setExampleB] = useState(weatherBMatrix);
    const [exampleStatesImages, setExampleStatesImages] = useState(weatherStatesImages);
    const [exampleObservationsImages, setExampleObservationsImages] = useState(weatherObservationsImages);
    const [exampleObservationSequence, setExampleObservationSequence] = useState(weatherObservationSequence);
    const [observationsSequenceInText, setObservationsSequenceInText] = useState(null);
    const [observationsSequenceInImages, setObservationsSequenceInImages] = useState(null);
    const [statesImagesInText, setStatesImagesInText] = useState(null);

    const lambda = (x) => <span style={{"color":"#E967E0"}}>λ<sub style={{"color":"#E967E0"}}>{x}</sub></span>;

    const pi = (x) => <span style={{"color":"#6EC668"}}>π<sub style={{"color":"#6EC668"}}>{x}</sub></span>;
    const pi_alone = () => <span style={{"color":"#6EC668"}}>π</span>;

    const A = (x) => <span style={{"color":"#E95252"}}>A<sub style={{"color":"#E95252"}}>{x}</sub></span>;

    const a = (x) => <span style={{"color":"#E95252"}}>a<sub style={{"color":"#E95252"}}>{x}</sub></span>;
    const a_alone = () => <span style={{"color":"#E95252"}}>a</span>;

    const B = (x) => <span style={{"color":"#43AFCA"}}>B<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;

    const b = (x) => <span style={{"color":"#43AFCA"}}>b<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;
    const b_alone = () => <span style={{"color":"#43AFCA"}}>b</span>;

    const t = (x) => <span style={{"color":"#2d2d2d"}}>t<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;
    
    const O = (x) => <span style={{"color":"#43AFCA"}}>O<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;
    const O_black = (x) => <span style={{"color":"#2d2d2d"}}>O<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;
    const S = (x) => <span style={{"color":"#E95252"}}>S<sub style={{"color":"#E95252"}}>{x}</sub></span>;
    const S_alone = () => <span><b style={{"color":"#E95252"}}>S</b></span>;
    const S_black = (x) => <span style={{"color":"#2d2d2d"}}>S<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;

    const curlyLeft = "{";
    const curlyRight = "}";
    const multiply = <span style={{"fontWeight":"300"}}>×</span>

    const brackets = (content, contentColor, bracketColor) => {
        let _bracketColor, _contentColor;

        if (bracketColor == "green") {
            _bracketColor = "#6EC668";
        } else if (bracketColor == "red") {
            _bracketColor = "#E95252";
        } else if (bracketColor == "blue") {
            _bracketColor = "#43AFCA";
        }

        if (contentColor == "green") {
            _contentColor = "#6EC668";
        } else if (contentColor == "red") {
            _contentColor = "#E95252";
        } else if (contentColor == "blue") {
            _contentColor = "#43AFCA";
        }

        return <span>
            <span style={{"color":_bracketColor}}>[</span>
            <span style={{"color":_contentColor}}>{content}</span>
            <span style={{"color":_bracketColor}}>]</span>
        </span>
    }



    const changeObservationSequenceInText = (_weatherExampleSelected) => {
        let _exampleObservationSequence = _weatherExampleSelected ? runnerObservationSequence : weatherObservationSequence;
        let _exampleObservationsImages = _weatherExampleSelected ? runnerObservationsImages : weatherObservationsImages ;
        let _exampleStatesImages = _weatherExampleSelected ? runnerStatesImages : weatherStatesImages;

        setObservationsSequenceInText(
            <span> 
                {"{"}
                    {_exampleObservationSequence.map((observationIndex, i) => {
                        if (i + 1 !== _exampleObservationSequence.length) {
                            return <span key={i}>{O_black(observationIndex)}, </span>
                        } else {
                            return <span key={i}>{O_black(observationIndex)} </span>
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
                                src={_exampleObservationsImages[observationIndex]} />, </div>
                        } else {
                            return <div className={classes.observationImageInText} key={i}><img 
                                src={_exampleObservationsImages[observationIndex]}/></div>
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
                                src={image} />, </div>
                        } else {
                            return <div className={classes.observationImageInText} key={i}><img 
                                src={image}/></div>
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
            setExamplePi(weatherPiVector);
            setExampleA(weatherAMatrix);
            setExampleB(weatherBMatrix);
            setExampleStatesImages(weatherStatesImages);
            setExampleObservationsImages(weatherObservationsImages);
            setExampleObservationSequence(weatherObservationSequence)
        } else {
            setExampleSubscript("R")
            setExamplePi(runnerPiVector);
            setExampleA(runnerAMatrix);
            setExampleB(runnerBMatrix);
            setExampleStatesImages(runnerStatesImages);
            setExampleObservationsImages(runnerObservationsImages);
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
                    likelihood 𝑃( {O("0:T-1")} | {lambda("x")} ) = 𝑃( {O("x")} | {lambda("x")} ) = 𝑃( {curlyLeft} {O("0")}, {O("1")}, ..., {O("T-1")}
                    {curlyRight} | {lambda("x")} ). In otherwords, if we want to compute the likelihood of observing a specific sequence of observations given our {lambda("x")}  = {curlyLeft} {A("x")}, {B("x")}, {pi("x")} {curlyRight}.
                </p>
            </Subsection>

            <Subsection header = "Given information" maxHeight="1160px" hideDefault={true}>
                <p>
                    In order to perform the forward algorithm, we first need to know what model we should
                    use to make the evaluation. The currently selected example is the weather example and
                    is what we will use to illustrate the algorithm (you can change example in the top-right
                    corner). The {lambda(exampleSubscript)} for the weather example is presented below (if you haven't already
                    checked out how we got that specific {lambda(exampleSubscript)}, I strongly encourage you to do so <u>here</u>):
                </p>
                
                <Vector vectorName={pi("i")} vector={examplePi} themeColor="green" />
                
                <Matrix matrixName={a("i, j")} matrix={exampleA} themeColor="red" />
                
                <Matrix matrixName={b("j, k")} matrix={exampleB} themeColor="blue" />

                <p>
                    To make things clear, here is two more figures to clarify how the transition matrix {A(exampleSubscript)} and the observation matrix 
                     {B(exampleSubscript)} should be interpreted:
                </p>

                <VisualMatrix 
                    matrixName={A(exampleSubscript)}
                    matrix={exampleA}
                    horizontalImages={exampleStatesImages}
                    themeColor="red"
                    verticalImages={exampleStatesImages}
                    weatherExampleSelected = {weatherExampleSelected}
                />

                <VisualMatrix 
                    matrixName={B(exampleSubscript)}
                    matrix={exampleB}
                    horizontalImages={exampleObservationsImages}
                    themeColor="blue"
                    verticalImages={exampleStatesImages}
                    weatherExampleSelected = {weatherExampleSelected}
                />

                <ImportantInfo>
                    Note that {a("i, j")} = {A("")} and that {b("j, k")} = {B("")}, it's only different notations. 
                </ImportantInfo>
                
                <div>
                    Besides knowing the {lambda(exampleSubscript)}, we need to know what observations is made. In this example,
                    the made observations are {O(exampleSubscript)} =  {observationsSequenceInText} = {observationsSequenceInImages}. 
                    Also, remember that the states at every time step is hidden. That is, we can't observe the states {statesImagesInText}. 
                    However, we can calculate the probabilities of being in them. 
                </div>
            </Subsection>

            <Subsection header = "Information to find" maxHeight="140px" hideDefault={true}>
                The goal of this algorithm is to find out what the likelihood is of observing a certain observation sequence, also called
                the emission sequence. That is, we want to calculate 𝑃( {O(`0:${exampleObservationSequence.length - 1}`)} | {lambda(exampleSubscript)} ) = 
                <br/> 𝑃( <span className={classes.oInText}>O</span> | {lambda(exampleSubscript)} ) = 𝑃( {observationsSequenceInText} | {lambda(exampleSubscript)} ) = 
                𝑃( {observationsSequenceInImages} | {lambda(exampleSubscript)} ).
            </Subsection>

            <Subsection header = "Mathematical derivation" maxHeight={"1200px"} hideDefault={false}>
                <p><i>
                    If you haven't already, check out the <u>Mathematical concepts</u> section to understand the
                    basic mathematics. Also, remember that</i> {S_alone()} = {S("0:T-1")}.
                </p>
                
                <p className={classes.extraLineHeight}>
                    The goal with the forward algorithm is to find the likelihood 𝑃( {O('0:T-1')} | {lambda('x')} ) and more
                    precicely in our case 𝑃( {O(`0:${exampleObservationSequence.length - 1}`)} | {lambda(exampleSubscript)} ). Using 
                    the <b>sum rule</b> we can conclude that
                </p>

                <MathContent>
                    <p style={{"display":"inline"}}>𝑃( {O('0:T-1')} | {lambda('x')} ) =  </p>
                    <SumChar top="" bottom={<div>{S_alone()} ∈ {S_black("T")} ({S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>𝑃( {O('0:T-1')} ⋂ {S_alone()} | {lambda('x')} )</p>
                </MathContent>

                <p>
                    Furthermore, if we apply the <b>product rule</b> we get the following result
                </p>

                <MathContent>
                    <p style={{"display":"inline"}}>
                        𝑃( {O('0:T-1')} | {lambda('x')} ) = {curlyLeft} <i>sum rule {curlyRight}</i> =
                    </p>
                    <SumChar top="" bottom={<div>{S_alone()} ∈ {S_black("T")} ({S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃( {O('0:T-1')} ⋂ {S_alone()} | {lambda('x')} ) = {curlyLeft} <i>product rule {curlyRight}</i> =
                    </p>
                </MathContent>

                <MathContent>
                    = 
                    <SumChar top="" bottom={<div>{S_alone()} ∈ {S_black("T")} ({S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃( {O('0:T-1')}  | {S_alone()} ⋂ {lambda('x')} ) {multiply} 𝑃( {S_alone()} ⋂ {lambda('x')} )
                    </p>
                </MathContent>

                <p>
                    In order to make the expression less complex, we'll now exclude the <span style={{"color":"#E967E0"}}>lambda</span> from the
                    expression. The expression above <i>explicitly</i> says that the expression applies when using
                    a specific {lambda("x")}. From now on, we will <i>implicitly</i> assume that we have a specific {lambda("x")}
                    = {curlyLeft} {A("x")}, {B("x")}, {pi("x")} {curlyRight}. With this in mind, we have the same expression
                </p>

                <MathContent>
                    <p style={{"display":"inline"}}>
                        𝑃({O('0:T-1')}) = {curlyLeft}<i>sum rule{curlyRight}</i> =
                    </p>
                    <SumChar top="" bottom={<div>{S_alone()} ∈ {S_black("T")} ({S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃({O('0:T-1')} ⋂ {S_alone()}) = {curlyLeft}<i>product rule{curlyRight}</i> =
                    </p>
                    <SumChar top="" bottom={<div>{S_alone()} ∈ {S_black("T")} ({S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        𝑃({O('0:T-1')}  | {S_alone()}) {multiply} 𝑃({S_alone()}) =
                    </p>
                </MathContent>

                <MathContent>
                    = 
                    <SumChar top="" bottom={<div>{S_alone()} ∈ {S_black("T")} ({S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        ( {pi_alone()}<sub>{S(0)}</sub> {multiply} {a_alone()}<sub>{S(0)},{S(1)}</sub> {multiply}<span> </span> 
                        {a_alone()}<sub>{S(1)},{S(2)}</sub> {multiply} ... {multiply} <span> </span>
                        {a_alone()}<sub>{S("T-2")},{S("T-1")}</sub> {multiply} {b_alone()}<sub>{S(0)},{O(0)}</sub> {multiply} <span> </span>
                        {b_alone()}<sub>{S(1)},{O(1)}</sub> {multiply} ... {multiply} <span> </span>
                        {b_alone()}<sub>{S("T-1")},{O("T-1")}</sub>) = 
                    </p>
                </MathContent>

                <MathContent>
                    = 
                    <SumChar top="" bottom={<div>{S_alone()} ∈ {S_black("T")} ({S_alone()})</div>}/>
                    <p style={{"display":"inline"}}>
                        ( {pi_alone()}{brackets(0, "red", "green")} {multiply} <span> </span>
                        {a_alone()}{brackets(0, "red", "red")}{brackets(1, "red", "red")} {multiply}<span> </span> 
                        {a_alone()}{brackets(1, "red", "red")}{brackets(2, "red", "red")} {multiply} ... {multiply}<span> </span> 
                        {a_alone()}{brackets("T-2", "red", "red")}{brackets("T-1", "red", "red")} {multiply}<span> </span> 

                        {b_alone()}{brackets(0, "red", "blue")}{brackets(0, "blue", "blue")} {multiply}<span> </span> 
                        {b_alone()}{brackets(1, "red", "blue")}{brackets(1, "blue", "blue")} {multiply} ... {multiply}<span> </span> 
                        {b_alone()}{brackets("T-1", "red", "blue")}{brackets("T-1", "blue", "blue")} ) = 
                    </p>
                </MathContent>

                <p>
                    It might be difficult to get your head around what's what in the expression above. To
                    clearify, note that we are summing over all possible permutations {S_black("T")}({S_alone()}) = ST({S("0:T-1")}). ST is
                    the standard notation for denoting the set of all possible permutations of a set. The T in
                    S<sub>T</sub> says how many elements there are in the current set. E.g. if we have the set 𝑋 =
                    {curlyLeft} a, b, c {curlyRight}, then we denote all permutations of 𝑋 by S<sub>3</sub> = {curlyLeft} (abc), (acb), (bac), 
                    (bca), (cab), (cba) {curlyRight}.
                </p>

                <ExampleExplanation>
                    Hej här förklaras det!!
                </ExampleExplanation>
            </Subsection>
        </div>
    );
}

export default ForwardAlgorithm;