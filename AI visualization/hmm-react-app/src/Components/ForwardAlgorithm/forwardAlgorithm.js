import React from 'react';
import classes from './forwardAlgorithm.module.css';

import Subsection from '../Common/Subsection/subsection'

const ForwardAlgorithm = (props) => {

    let curlyLeft = "{";
    let curlyRight = "}";

    let lambda = (x) => <span style={{"color":"#E967E0"}}>λ<sub>{x}</sub></span>;
    let pi = (x) => <span style={{"color":"#6EC668"}}>π<sub>{x}</sub></span>;
    let A = (x) => <span style={{"color":"#E95252"}}>A<sub>{x}</sub></span>;
    let B = (x) => <span style={{"color":"#43AFCA"}}>B<sub>{x}</sub></span>;
    let O = (x) => <span style={{"color":"#43AFCA"}}>O<sub>{x}</sub></span>;

    return (
        <div className={classes.ForwardAlgorithm}>
            <h1>Forward Algorithm</h1>

            <Subsection header = "About the Forward Algorithm" maxHeight="140px" hideDefault={false}>
                <p>
                    The algoritm is used to solve problems in the category <b>evaluation/filtering</b>. That is, if we want to compute the
                    likelihood 𝑃( {O("0:T-1")} | {lambda("x")} ) = 𝑃( {O("x")} | {lambda("x")} ) = 𝑃( {curlyLeft} {O("0")}, {O("1")}, ..., {O("T-1")}
                    {curlyRight} | {lambda("x")}). In otherwords, if we want to compute the likelihood of observing a specific sequence of observations given our {lambda("x")}  = {curlyLeft} {A("x")}, {B("x")}, {pi("x")} {curlyRight}.
                </p>
            </Subsection>
        </div>
    );
}

export default ForwardAlgorithm;