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

    const lambda = (x) => <span style={{"color":"#E967E0"}}> λ<sub style={{"color":"#E967E0"}}>{x}</sub></span>;
    const pi = (x) => <span style={{"color":"#6EC668"}}> π<sub style={{"color":"#6EC668"}}>{x}</sub></span>;
    const A = (x) => <span style={{"color":"#E95252"}}> A<sub style={{"color":"#E95252"}}>{x}</sub></span>;
    const a = (x) => <span style={{"color":"#E95252"}}> a<sub style={{"color":"#E95252"}}>{x}</sub></span>;
    const B = (x) => <span style={{"color":"#43AFCA"}}> B<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;
    const b = (x) => <span style={{"color":"#43AFCA"}}> b<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;
    const t = (x) => <span style={{"color":"#2d2d2d"}}> t<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;
    
    const O = (x) => <span style={{"color":"#43AFCA"}}> O<sub style={{"color":"#43AFCA"}}>{x}</sub></span>;
    const O_black = (x) => <span style={{"color":"#2d2d2d"}}> O<sub style={{"color":"#2d2d2d"}}>{x}</sub></span>;

    const curlyLeft = "{";
    const curlyRight = "}";


    const changeObservationSequenceInText = (_weatherExampleSelected) => {
        let _exampleObservationSequence = _weatherExampleSelected ? runnerObservationSequence : weatherObservationSequence;
        let _exampleObservationsImages = _weatherExampleSelected ? runnerObservationsImages : weatherObservationsImages ;

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

        setObservationsSequenceInImages(
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

            <Subsection header = "About the Forward Algorithm" maxHeight="140px" hideDefault={false}>
                <p>
                    The algoritm is used to solve problems in the category <b>evaluation/filtering</b>. That is, if we want to compute the
                    likelihood 𝑃( {O("0:T-1")} | {lambda("x")} ) = 𝑃( {O("x")} | {lambda("x")} ) = 𝑃( {curlyLeft} {O("0")}, {O("1")}, ..., {O("T-1")}
                    {curlyRight} | {lambda("x")} ). In otherwords, if we want to compute the likelihood of observing a specific sequence of observations given our {lambda("x")}  = {curlyLeft} {A("x")}, {B("x")}, {pi("x")} {curlyRight}.
                </p>
            </Subsection>

            <Subsection header = "Given information" maxHeight="1075px" hideDefault={true}>
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
                    Also, remember that the states at every time step is hidden. That is, we can't observe the states <span
                    className={classes.imageInText}><img src={exampleStatesImages[0]} /></span>, <span className=
                    {classes.imageInText}><img src={exampleStatesImages[1]} /></span> and <span className={classes.imageInText}>
                    <img src={exampleStatesImages[2]}/></span>. However, we can calculate the probabilities of being in them. 
                </div>
            </Subsection>

            <Subsection header = "Information to find" maxHeight="140px" hideDefault={true}>
                The goal of this algorithm is to find out what the likelihood is of observing a certain observation sequence, also called
                the emission sequence. That is, we want to calculate 𝑃( {O(`0:${exampleObservationSequence.length - 1}`)} | {lambda(exampleSubscript)} ) = 
                <br/> 𝑃( <span className={classes.oInText}>O</span> | {lambda(exampleSubscript)} ) = 𝑃( {observationsSequenceInText} | {lambda(exampleSubscript)} ) = 
                𝑃( {observationsSequenceInImages} | {lambda(exampleSubscript)} ).
            </Subsection>

            <Subsection header = "Mathematical derivation" maxHeight="1200px" hideDefault={true}>
                
            </Subsection>
        </div>
    );
}

export default ForwardAlgorithm;