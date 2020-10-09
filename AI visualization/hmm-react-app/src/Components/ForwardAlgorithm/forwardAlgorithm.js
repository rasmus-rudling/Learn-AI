import React from 'react';
import classes from './forwardAlgorithm.module.scss';

import forwardAlgorithmBG from '../../Resources/Images/Backgrounds/bg2.png';

// --- COMPONENTS ---
import Subsection from '../Common/Subsection/subsection';
import Vector from '../Common/Vector/vector';
import Matrix from '../Common/Matrix/matrix';
import BackButton from '../Common/BackButton/backButton';

const ForwardAlgorithm = (props) => {

    let curlyLeft = "{";
    let curlyRight = "}";

    const lambda = (x) => <span style={{"color":"#E967E0"}}>λ<sub>{x}</sub></span>;
    const pi = (x) => <span style={{"color":"#6EC668"}}>π<sub>{x}</sub></span>;
    const A = (x) => <span style={{"color":"#E95252"}}>A<sub>{x}</sub></span>;
    const a = (x) => <span style={{"color":"#E95252"}}>a<sub>{x}</sub></span>;
    const B = (x) => <span style={{"color":"#43AFCA"}}>B<sub>{x}</sub></span>;
    const b = (x) => <span style={{"color":"#43AFCA"}}>b<sub>{x}</sub></span>;
    const O = (x) => <span style={{"color":"#43AFCA"}}>O<sub>{x}</sub></span>;

    const piVector = [0.435, 0.125, 0.44]

    const aMatrix = [
        [0.42, 0.32, 0.26],
        [0.25, 0.40, 0.35],
        [0.49, 0.33, 0.18]
    ]

    const bMatrix = [
        [0.17, 0.00, 0.37, 0.04, 0.42],
        [0.24, 0.41, 0.09, 0.23, 0.03],
        [0.11, 0.67, 0.04, 0.10, 0.08]
    ]


    return (
        <div className={classes.ForwardAlgorithm}>
            <img src = {forwardAlgorithmBG} className={classes.backgroundImage}  />

            <BackButton />

            <h1>Forward Algorithm</h1>

            <Subsection header = "About the Forward Algorithm" maxHeight="140px" hideDefault={true}>
                <p>
                    The algoritm is used to solve problems in the category <b>evaluation/filtering</b>. That is, if we want to compute the
                    likelihood 𝑃( {O("0:T-1")} | {lambda("x")} ) = 𝑃( {O("x")} | {lambda("x")} ) = 𝑃( {curlyLeft} {O("0")}, {O("1")}, ..., {O("T-1")}
                    {curlyRight} | {lambda("x")}). In otherwords, if we want to compute the likelihood of observing a specific sequence of observations given our {lambda("x")}  = {curlyLeft} {A("x")}, {B("x")}, {pi("x")} {curlyRight}.
                </p>
            </Subsection>

            <Subsection header = "Given information" maxHeight="440px" hideDefault={false}>
                <p>
                    In order to perform the forward algorithm, we first need to know what model we should
                    use to make the evaluation. The currently selected example is the weather example and
                    is what we will use to illustrate the algorithm (you can change example in the top-right
                    corner). The λw for the weather example is presented below (if you haven't already
                    checked out how we got that specific {lambda("w")}, I strongly encourage you to do so <u>here</u>):
                </p>

                <Vector vectorName={pi("i")} vector={piVector} themeColor="green" />

                <Matrix vectorName={a("i, j")} matrix={aMatrix} themeColor="red" />

                <Matrix vectorName={b("j, k")} matrix={bMatrix} themeColor="blue" />
            </Subsection>
        </div>
    );
}

export default ForwardAlgorithm;