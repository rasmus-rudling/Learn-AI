import React from 'react';
import classes from './forwardAlgorithm.module.css';


import forwardAlgorithmBG from '../../Resources/Images/Backgrounds/bg2.png';

// --- COMPONENTS ---
import Subsection from '../Common/Subsection/subsection';
import Vector from '../Common/Vector/vector';

const ForwardAlgorithm = (props) => {

    let curlyLeft = "{";
    let curlyRight = "}";

    const lambda = (x) => <span style={{"color":"#E967E0"}}>λ<sub>{x}</sub></span>;
    const pi = (x) => <span style={{"color":"#6EC668"}}>π<sub>{x}</sub></span>;
    const A = (x) => <span style={{"color":"#E95252"}}>A<sub>{x}</sub></span>;
    const B = (x) => <span style={{"color":"#43AFCA"}}>B<sub>{x}</sub></span>;
    const O = (x) => <span style={{"color":"#43AFCA"}}>O<sub>{x}</sub></span>;


    return (
        <div className={classes.ForwardAlgorithm}>
            <img src = {forwardAlgorithmBG} className={classes.backgroundImage}  />

            <h1>Forward Algorithm</h1>

            <Subsection header = "About the Forward Algorithm" maxHeight="140px" hideDefault={false}>
                <p>
                    The algoritm is used to solve problems in the category <b>evaluation/filtering</b>. That is, if we want to compute the
                    likelihood 𝑃( {O("0:T-1")} | {lambda("x")} ) = 𝑃( {O("x")} | {lambda("x")} ) = 𝑃( {curlyLeft} {O("0")}, {O("1")}, ..., {O("T-1")}
                    {curlyRight} | {lambda("x")}). In otherwords, if we want to compute the likelihood of observing a specific sequence of observations given our {lambda("x")}  = {curlyLeft} {A("x")}, {B("x")}, {pi("x")} {curlyRight}.
                </p>
            </Subsection>

            <Subsection header = "Given information" maxHeight="200px" hideDefault={true}>
                <p>
                    In order to perform the forward algorithm, we first need to know what model we should
                    use to make the evaluation. The currently selected example is the weather example and
                    is what we will use to illustrate the algorithm (you can change example in the top-right
                    corner). The λw for the weather example is presented below (if you haven't already
                    checked out how we got that specific {lambda("w")}, I strongly encourage you to do so <u>here</u>):
                </p>

                <Vector vectorName={pi("i")} vectorElements={["0.435", "0.125", "0.44"]} themeColor="green"/>
            </Subsection>
        </div>
    );
}

export default ForwardAlgorithm;