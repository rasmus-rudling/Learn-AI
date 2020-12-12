import React from 'react';

import * as utility from '../../../Common/Utility/utility';

import MathContent from '../../../Common/MathContent/mathContent';
import SumChar from '../../../Common/MathContent/SumChar/sumChar';
import ExampleExplanation from '../../../Common/ExampleExplanation/exampleExplanation';
import Vector from '../../../Common/Vector/vector';
import ExampleAlphaOne from '../ExampleAlphaOne/exampleAlphaOne';

const ExplanationOfTheFA = (
    {   weatherExampleSelected, 
        exampleA, 
        exampleB, 
        examplePi, 
        exampleStatesImages, 
        exampleObservationsImages, 
        numberOfDecimalsToShow, 
        exampleAlphaVector, 
        exampleAlphaSums,
        exampleObservationSequence,
        classes,
        exampleSubscript,
        observationsSequenceInText,
        observationsSequenceInImages
    }) => {

    return (
        <>
            <p style={{"marginBottom":"15px"}}>
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
                {utility.S_black("1")}, ..., {utility.blankSpace} {utility.S_black("N-1")} {utility.curlyRight}. That is
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

            <MathContent extraStyle = {{"marginTop":"5px", "marginBottom":"10px"}}>
                = {utility.blankSpace} {utility.curlyLeft} <i>implicitly taking</i> {utility.blankSpace} {utility.lambda("x")} {utility.blankSpace} <i> into account </i> {utility.curlyRight} {utility.blankSpace} = {utility.blankSpace}  
                𝑃({utility.O('0:T-1')} {utility.blankSpace} ⋂ {utility.blankSpace}  
                {utility.S("t")} = {utility.S_black("i")} ) ∀ t ∈ {utility.blankSpace} {utility.curlyLeft} 0, 1, ..., T-1 {utility.curlyRight}
            </MathContent> 

            <p>
                That is, {utility.alpha_orange("t", "i")} is the likelihood of observing a partial sequence of observables{utility.blankSpace}
                {utility.curlyLeft} {utility.O('0')}, {utility.O('1')}, …, {utility.O('t')} {utility.curlyRight} AND at time t, being in state {utility.S_black("i")}.
            </p>

            <h4 style={{"marginTop":"15px"}}>The first time step</h4>

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
                header = {`Further explanation using the ${weatherExampleSelected ? "weather" : "runner"} example`} 
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
                        vector={exampleAlphaVector[0]}
                        themeColor="orange"
                    />
                </MathContent>

                <p>
                    With these results we can now calculate the total likelihood of observing{utility.blankSpace}
                    {utility.imageInText(exampleObservationsImages[0])} at time step 0
                </p>

                <MathContent extraStyle={{"margin":"5px 0 0px 0"}}>
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

                <MathContent extraStyle={{"margin":"5px 0 5px 0"}}>
                    {weatherExampleSelected ? 
                        <div>
                            = {examplePi[0] * exampleB[0][0]} + {examplePi[1] * exampleB[1][0]} + {examplePi[2] * exampleB[2][0]} ={utility.blankSpace}
                            {utility.roundTo((examplePi[0] * exampleB[0][0]) + (examplePi[1] * exampleB[1][0]) + (examplePi[2] * exampleB[2][0]), numberOfDecimalsToShow)}
                        </div> :

                        <div>
                            = {examplePi[0] * exampleB[0][0]} + {examplePi[1] * exampleB[1][0]} + {examplePi[2] * exampleB[2][0]} + {examplePi[3] * exampleB[3][0]} ={utility.blankSpace}
                            {utility.roundTo((examplePi[0] * exampleB[0][0]) + (examplePi[1] * exampleB[1][0]) + (examplePi[2] * exampleB[2][0]) + (examplePi[3] * exampleB[3][0]), numberOfDecimalsToShow)}
                        </div>
                    }
                </MathContent>

                <p>
                    That is, there is a {utility.roundTo((exampleAlphaSums[0] * 100), 1)}% chance that we in the first time step
                    observe {utility.imageInText(exampleObservationsImages[exampleObservationSequence[0]])}.
                </p>
            </ExampleExplanation>

            <h4 className={classes.noUpperCase} style={{"marginTop":"60px"}}>STEPS 1 ≤ t ≤ T-1</h4>
            
            <p>
                For the remaining time steps, the new alpha we calculate is dependent on the previous
                alphas and is defined as
            </p>

            <MathContent extraStyle={{"margin":"25px 0 5px 0"}}>
                {utility.alpha_orange("t", "i")}{utility.blankSpace}=
                <div className={classes.leftBracket} 
                    style={{
                        "borderColor": "#2d2d2d", 
                        "margin":"-21px 3px 10px 5px",
                        "height":"70px",
                        "width":"5px"
                    }} 
                />
                <SumChar top="N−1" bottom="j=0"/> 
                {utility.alpha_orange("t-1", "j")}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                {utility.a("j,i")}
                <div className={classes.rightBracket} 
                    style={{
                        "borderColor": "#2d2d2d", 
                        "margin":"-21px 3px 10px 3px",
                        "height":"70px",
                        "width":"5px"
                    }} 
                />
                {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                {utility.b_parenthesis("i", utility.O("t"))}{utility.blankSpace}=
                {/*  */}
                <div className={classes.leftBracket} 
                    style={{
                        "borderColor": "#2d2d2d", 
                        "margin":"-21px 3px 10px 5px",
                        "height":"70px",
                        "width":"5px"
                    }} 
                />
                <SumChar top="N−1" bottom="j=0"/> 
                {utility.alpha_orange("t-1", "j")}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                𝑃({utility.S("t")} = {utility.S_black("i")}{utility.blankSpace}|{utility.blankSpace}{utility.S("t-1")} = {utility.S_black("j")} )
                <div className={classes.rightBracket} 
                    style={{
                        "borderColor": "#2d2d2d", 
                        "margin":"-21px 3px 10px 3px",
                        "height":"70px",
                        "width":"5px"
                    }} 
                />
                {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                𝑃({utility.O("t")}{utility.blankSpace}|{utility.blankSpace}{utility.S_black("i")})
            </MathContent>

            <p>
                Indeed the expression above is appalling, but let's try to narrow down what's really going
                on. First of we see that we sum over j from 0 to N-1. Remember that the cardinality of
                the set of states is N, that is, there are N number of possible states. Hence, the sum will
                consist of N terms. For each term, we are in state j, and the state j is representing the
                state we possibly came from, namely from time step t-1. {utility.alpha_orange("t-1", "j")} represents the probability
                of the HMM being in state j, given the partial observation sequence {utility.curlyLeft} {utility.O("0")},{utility.blankSpace}  
                {utility.O("1")}, ..., {utility.O("t-1")} {utility.curlyRight}. By
                multiplying {utility.alpha_orange("t-1", "j")} with the transition matrix {utility.a("i,j")}, the likelihood of transitioning from
                state j to state i, we get the probability of being in state i. And since we can come from
                all of the other states, including i itself, we sum over all previous states for this new
                possible state. But as we can see, the expression doesn't end there. Moreover, we are
                multiplying with 𝑃({utility.O("t")} | {utility.S("i")} ), that is, the probability of making a specific observation given
                that we are in a particular state. We do that because that's what we are really interested
                in. That is, the probability of making a certain observation. One could imagine that the
                complicated leftmost expression is just a prerequisite for us to get that final likelihood.
            </p>

            <p style={{"marginTop":"15px"}}>
                I hope the explanation didn't make you more confused than you were before, in either
                case, the expression makes more sense the more you're exposed to it.
            </p>
            
            <ExampleExplanation
                header = {`Further explanation using the ${weatherExampleSelected ? "weather" : "runner"} example`} 
                hideDefault={true}
            >
                <p>
                    Let's calculate all of the {utility.alpha_orange("1", "i")}'s together. As a starting point, we have the following
                </p>
                
                <MathContent extraStyle={{"margin":"25px 0 5px 0"}}>
                    {utility.alpha_orange("1", "i")}{utility.blankSpace}=
                    <div className={classes.leftBracket} 
                        style={{
                            "borderColor": "#2d2d2d", 
                            "margin":"-21px 3px 10px 5px",
                            "height":"70px",
                            "width":"5px"
                        }} 
                    />
                    <SumChar top={exampleA.length-1} bottom="j=0"/> 
                    {utility.alpha_orange("0", "j")}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                    𝑃({utility.S("1")} = {utility.S_black("i")}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.S_black("j")} )
                    <div className={classes.rightBracket} 
                        style={{
                            "borderColor": "#2d2d2d", 
                            "margin":"-21px 3px 10px 3px",
                            "height":"70px",
                            "width":"5px"
                        }} 
                    />
                    {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                    𝑃({utility.O_black(exampleObservationSequence[1])}{utility.blankSpace}|{utility.blankSpace}{utility.S_black("i")})
                </MathContent>

                <p>First off, we calculate {utility.alpha_without_parenthesis(1)} for the first state</p>
                
                <MathContent extraStyle={{"margin":"25px 0 5px 0"}}>
                    {utility.alpha_orange("1", 0)}{utility.blankSpace}=
                    <div className={classes.leftBracket} 
                        style={{
                            "borderColor": "#2d2d2d", 
                            "margin":"-21px 3px 10px 5px",
                            "height":"70px",
                            "width":"5px"
                        }} 
                    />
                    <SumChar top={exampleA.length-1} bottom="j=0"/> 
                    {utility.alpha_orange("0", "j")}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                    𝑃({utility.S("1")} = {utility.S_black(0)}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.S_black("j")} )
                    <div className={classes.rightBracket} 
                        style={{
                            "borderColor": "#2d2d2d", 
                            "margin":"-21px 3px 10px 3px",
                            "height":"70px",
                            "width":"5px"
                        }} 
                    />
                    {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                    𝑃({utility.O_black(exampleObservationSequence[1])}{utility.blankSpace}|{utility.blankSpace}{utility.S_black(0)})
                    {utility.blankSpace}=
                </MathContent>

                <ExampleAlphaOne 
                    weatherExampleSelected = {weatherExampleSelected}
                    stateIndex="0" 
                    exampleA = {exampleA}
                    exampleB = {exampleB}
                    exampleObservationSequence = {exampleObservationSequence}
                    exampleStatesImages = {exampleStatesImages}
                    exampleObservationsImages = {exampleObservationsImages}
                    exampleAlphaVector = {exampleAlphaVector}
                />

                <p>Secondly, we calculate {utility.alpha_without_parenthesis(1)} for the second state</p>

                <ExampleAlphaOne 
                    weatherExampleSelected = {weatherExampleSelected}
                    stateIndex="1" 
                    exampleA = {exampleA}
                    exampleB = {exampleB}
                    exampleObservationSequence = {exampleObservationSequence}
                    exampleStatesImages = {exampleStatesImages}
                    exampleObservationsImages = {exampleObservationsImages}
                    exampleAlphaVector = {exampleAlphaVector}
                    marginAtTop = "10px"
                />

                {weatherExampleSelected ? 
                    <p>Finally, we calculate {utility.alpha_without_parenthesis(1)} for the thrid state</p> :
                    <p>Thirdly, we calculate {utility.alpha_without_parenthesis(1)} for the third state</p>
                }

                <ExampleAlphaOne 
                    weatherExampleSelected = {weatherExampleSelected}
                    stateIndex="2" 
                    exampleA = {exampleA}
                    exampleB = {exampleB}
                    exampleObservationSequence = {exampleObservationSequence}
                    exampleStatesImages = {exampleStatesImages}
                    exampleObservationsImages = {exampleObservationsImages}
                    exampleAlphaVector = {exampleAlphaVector}
                    marginAtTop = "10px"
                />

                {!weatherExampleSelected ? 
                    <div>
                        <p>Lastly, we calculate {utility.alpha_without_parenthesis(1)} for the fourth state</p>
                        <ExampleAlphaOne 
                            weatherExampleSelected = {weatherExampleSelected}
                            stateIndex="3" 
                            exampleA = {exampleA}
                            exampleB = {exampleB}
                            exampleObservationSequence = {exampleObservationSequence}
                            exampleStatesImages = {exampleStatesImages}
                            exampleObservationsImages = {exampleObservationsImages}
                            exampleAlphaVector = {exampleAlphaVector}
                            marginAtTop = "10px"
                        />
                    </div> :
                    null
                }

                <p>At last, we now have all the desired likelihoods</p>

                <MathContent extraStyle={{"margin":"-5px 0 -5px 0"}}>
                    <Vector 
                        vectorName={utility.alpha_orange("1", "i")} 
                        vector={exampleAlphaVector[1].map(prob => utility.roundTo(prob, numberOfDecimalsToShow))}
                        themeColor="orange"
                    />
                </MathContent>

                <p>With these results, we can calculate</p>
                
                <MathContent extraStyle={{"margin":"10px 0 -5px 0"}}>
                    𝑃({utility.O(0)} = {utility.O_black(exampleObservationSequence[0])}{utility.blankSpace}⋂{utility.blankSpace}
                    {utility.O(1)} = {utility.O_black(exampleObservationSequence[1])}) ={utility.blankSpace}
                    
                    𝑃({utility.O(0)} = {utility.imageInText(exampleObservationsImages[exampleObservationSequence[0]])}{utility.blankSpace}⋂{utility.blankSpace}
                    {utility.O(1)} = {utility.imageInText(exampleObservationsImages[exampleObservationSequence[1]])}) ={utility.blankSpace}
                    {weatherExampleSelected ?
                        <div>{utility.alpha_orange("1", 0)} + {utility.alpha_orange("1", 1)} + {utility.alpha_orange("1", 2)}</div> :
                        <div>{utility.alpha_orange("1", 0)} + {utility.alpha_orange("1", 1)} + {utility.alpha_orange("1", 2)} + {utility.alpha_orange("1", 3)}</div>
                    }{utility.blankSpace}=
                </MathContent>
                
                <MathContent extraStyle={{"margin":"5px 0 -5px 0"}}>
                    ={utility.blankSpace}
                    {weatherExampleSelected ?
                        <div>{utility.alpha_orange("1", utility.imageInText(exampleStatesImages[0]))} + {utility.alpha_orange("1", utility.imageInText(exampleStatesImages[1]))} + {utility.alpha_orange("1", utility.imageInText(exampleStatesImages[2]))}</div> :
                        <div>{utility.alpha_orange("1", utility.imageInText(exampleStatesImages[0]))} + {utility.alpha_orange("1", utility.imageInText(exampleStatesImages[1]))} + {utility.alpha_orange("1", utility.imageInText(exampleStatesImages[2]))} + {utility.alpha_orange("1", utility.imageInText(exampleStatesImages[3]))}</div>
                    }{utility.blankSpace}=
                </MathContent>

                <MathContent extraStyle={{"margin":"5px 0 10px 0"}}>
                    ={utility.blankSpace}
                    {weatherExampleSelected ?
                        <div>{utility.roundTo(exampleAlphaVector[1][0], numberOfDecimalsToShow)} + {utility.roundTo(exampleAlphaVector[1][1], numberOfDecimalsToShow)} + {utility.roundTo(exampleAlphaVector[1][2], numberOfDecimalsToShow)}</div> :
                        <div>{utility.roundTo(exampleAlphaVector[1][0], numberOfDecimalsToShow)} + {utility.roundTo(exampleAlphaVector[1][1], numberOfDecimalsToShow)} + {utility.roundTo(exampleAlphaVector[1][2], numberOfDecimalsToShow)} + {utility.roundTo(exampleAlphaVector[1][3], numberOfDecimalsToShow)}</div>
                    }{utility.blankSpace}={utility.blankSpace}

                    {utility.roundTo(exampleAlphaSums[1], numberOfDecimalsToShow)}
                </MathContent>
                
                <p>
                    That is, there is a {utility.roundTo((exampleAlphaSums[1] * 100), 1)}% chance that we in the first time step observe{utility.blankSpace}
                    {utility.imageInText(exampleObservationsImages[exampleObservationSequence[0]])} AND in the
                    second time step observe {utility.imageInText(exampleObservationsImages[exampleObservationSequence[1]])}.
                </p>
            </ExampleExplanation>
            
            <h4 style={{"marginTop":"60px"}}>THE FINAL RESULTS</h4>
            
            <p>
                If you've been reading carefully, you should already know how to calculate the final
                likelihood. However, here's for you who have jumped straight to the end. We have
                covered how to calculate the first alpha {utility.alpha_orange(0, "i")}. Furthermore, we have covered how to
                calculate all other alphas {utility.alpha_orange(1, "i")}, {utility.alpha_orange(2, "i")}, ..., {utility.alpha_orange("T-1", "i")}.
                We have also covered how to calculate the likelihood of seeing a partial observation sequence when having the alpha at which the
                partial sequence end. Now, the partial observation sequence is the whole sequence{utility.blankSpace}
                {utility.curlyLeft} {utility.O(0)}, {utility.O(1)}, ..., {utility.O("T-1")} {utility.curlyRight} , and the current
                alpha is the last alpha {utility.alpha_orange("T-1", "i")}. Lastly, we can calculate the final likelihood
            </p>

            <MathContent extraStyle={{"margin":"15px 0 0px 0"}}>
                𝑃( {utility.O("0:T-1")}{utility.blankSpace}|{utility.blankSpace}{utility.lambda("x")} ) ={utility.blankSpace}
                <SumChar top="" bottom={<div>{utility.S_black("i")} ∈ <b>{utility.S_black()}</b></div>}/>
                {utility.alpha_orange("T-1", "i")}
            </MathContent>

            <p>
                We sum over all the alphas because we don't care which state the HMM is in at this last
                step, we only care about the likelihood of the HMM being in some state at the last time
                step T-1.
            </p>

            <ExampleExplanation 
                header = {`Further explanation using the ${weatherExampleSelected ? "weather" : "runner"} example`} 
                hideDefault={true}
            >
                <p>
                    The following are all of the alphas for the {weatherExampleSelected ? "weater" : "runner"} example
                </p>

                <MathContent extraStyle={{"margin":"10px 0 0px 0"}}>
                    <Vector 
                        vectorName={utility.alpha_orange(0, "i")} 
                        vector={exampleAlphaVector[0].map(prob => utility.roundTo(prob, numberOfDecimalsToShow))}
                        themeColor="orange"
                    />
                </MathContent>

                <MathContent extraStyle={{"margin":"-5px 0 0px 0"}}>
                    <Vector 
                        vectorName={utility.alpha_orange(1, "i")} 
                        vector={exampleAlphaVector[1].map(prob => utility.roundTo(prob, numberOfDecimalsToShow))}
                        themeColor="orange"
                    />
                </MathContent>

                <MathContent extraStyle={{"margin":"-5px 0 0px 0"}}>
                    <Vector 
                        vectorName={utility.alpha_orange(2, "i")} 
                        vector={exampleAlphaVector[2].map(prob => utility.roundTo(prob, numberOfDecimalsToShow))}
                        themeColor="orange"
                    />
                </MathContent>

                <MathContent extraStyle={{"margin":"-5px 0 0px 0"}}>
                    <Vector 
                        vectorName={utility.alpha_orange(3, "i")} 
                        vector={exampleAlphaVector[3].map(prob => utility.roundTo(prob, numberOfDecimalsToShow + 1))}
                        themeColor="orange"
                    />
                </MathContent>

                <MathContent extraStyle={{"margin":"-5px 0 0px 0"}}>
                    <Vector 
                        vectorName={utility.alpha_orange(4, "i")} 
                        vector={exampleAlphaVector[4].map(prob => utility.roundTo(prob, numberOfDecimalsToShow + 1))}
                        themeColor="orange"
                    />
                </MathContent>

                {!weatherExampleSelected ? 
                    <MathContent extraStyle={{"margin":"-5px 0 0px 0"}}>
                        <Vector 
                            vectorName={utility.alpha_orange(5, "i")} 
                            vector={exampleAlphaVector[5].map(prob => utility.roundTo(prob, numberOfDecimalsToShow + 1))}
                            themeColor="orange"
                        />
                    </MathContent>

                : null}

                <p>
                    With the help of the last alpha vector {utility.alpha_orange(exampleObservationSequence.length-1, "i")}, we can calculate the desired likelihood 
                </p>

                <MathContent extraStyle={{"margin":"15px 0 0px 0"}}>
                    𝑃( {utility.O(`0:${exampleObservationSequence.length-1}`)}{utility.blankSpace}|{utility.blankSpace}{utility.lambda(exampleSubscript)} ) ={utility.blankSpace}
                    <SumChar top="" bottom={<div>{utility.S_black("i")} ∈ <b>{utility.S_black()}</b></div>}/>
                    {utility.alpha_orange(exampleObservationSequence.length-1, "i")}{utility.blankSpace}={utility.blankSpace}
                </MathContent>

                <MathContent extraStyle={{"margin":"0px 0 0px 0"}}>
                    {weatherExampleSelected ?
                        <div>
                            ={utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.S_black(0))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.S_black(1))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.S_black(2))} = 
                        </div> :
                        <div>
                            ={utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.S_black(0))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.S_black(1))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.S_black(2))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.S_black(3))} = 
                        </div>
                    }
                </MathContent>

                <MathContent extraStyle={{"margin":"0px 0 0px 0"}}>
                    {weatherExampleSelected ?
                        <div>
                            ={utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.imageInText(exampleStatesImages[0]))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.imageInText(exampleStatesImages[1]))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.imageInText(exampleStatesImages[2]))} = 
                        </div> :
                        <div>
                            ={utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.imageInText(exampleStatesImages[0]))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.imageInText(exampleStatesImages[1]))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.imageInText(exampleStatesImages[2]))} + 
                            {utility.blankSpace}{utility.alpha_orange(exampleObservationSequence.length-1, utility.imageInText(exampleStatesImages[3]))} = 
                        </div>
                    }
                </MathContent>

                <MathContent extraStyle={{"margin":"0px 0 10px 0"}}>
                {weatherExampleSelected ?
                    <div>
                        ={utility.blankSpace}{utility.roundTo(exampleAlphaVector[4][0], numberOfDecimalsToShow + 1)} +
                        {utility.blankSpace}{utility.roundTo(exampleAlphaVector[4][1], numberOfDecimalsToShow + 1)} +
                        {utility.blankSpace}{utility.roundTo(exampleAlphaVector[4][2], numberOfDecimalsToShow + 1)} ={utility.blankSpace}
                    </div> :
                    <div>
                        ={utility.blankSpace}{utility.roundTo(exampleAlphaVector[5][0], numberOfDecimalsToShow + 1)} +
                        {utility.blankSpace}{utility.roundTo(exampleAlphaVector[5][1], numberOfDecimalsToShow + 1)} +
                        {utility.blankSpace}{utility.roundTo(exampleAlphaVector[5][2], numberOfDecimalsToShow + 1)} +
                        {utility.blankSpace}{utility.roundTo(exampleAlphaVector[5][3], numberOfDecimalsToShow + 1)} ={utility.blankSpace}
                    </div>
                }
                {weatherExampleSelected ? 
                    utility.roundTo(exampleAlphaSums[4], numberOfDecimalsToShow + 1) : 
                    utility.roundTo(exampleAlphaSums[5], numberOfDecimalsToShow + 1)
                }
                {utility.blankSpace}={utility.blankSpace}
                {weatherExampleSelected ? 
                    utility.roundTo(exampleAlphaSums[4], numberOfDecimalsToShow + 1) * 100 : 
                    utility.roundTo(exampleAlphaSums[5], numberOfDecimalsToShow + 1) * 100
                }%
                </MathContent>

                <p>
                    Hence, there is a {weatherExampleSelected ? 
                    utility.roundTo(exampleAlphaSums[4], numberOfDecimalsToShow + 1) * 100 : 
                    utility.roundTo(exampleAlphaSums[5], numberOfDecimalsToShow + 1) * 100
                }% chance that we observe the observation sequence {observationsSequenceInText} = {observationsSequenceInImages}
                {utility.blankSpace}given our Hidden Markov Model {utility.lambda(exampleSubscript)}.
                </p>

            </ExampleExplanation>
        </>
    )

}


export default ExplanationOfTheFA;