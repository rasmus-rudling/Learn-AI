import React from 'react';

import * as utility from '../../../Common/Utility/utility';

import MathContent from '../../../Common/MathContent/mathContent';
import SumChar from '../../../Common/SumChar/sumChar';
import ExampleExplanation from '../../../Common/ExampleExplanation/exampleExplanation';

const MathematicalDerivation = (
    {   exampleSubscript,
        weatherExampleSelected, 
        exampleA, 
        exampleObservationsImages, 
        exampleObservationSequence,
        classes
    }) => {

    return (
        <>
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
                header = {`Further explanation using the ${weatherExampleSelected ? "weather" : "runner"} example`} 
                maxHeight="440px" 
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

        </>
    )
}

export default MathematicalDerivation;