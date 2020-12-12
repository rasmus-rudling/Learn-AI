import React from 'react';
import classes from './exampleAlphaOne.module.scss';
import * as utility from '../../../Common/Utility/utility';


import MathContent from '../../../Common/MathContent/mathContent';

const ExampleAlphaOne = (props) => {

    return (
        <div>
            <MathContent extraStyle={props.marginAtTop !== undefined ? {"margin":`${props.marginAtTop} 0 5px 0`} : {"margin":"25px 0 5px 0"}} >
                        {utility.alpha_orange("1", props.stateIndex)}{utility.blankSpace}=
                        <div className={classes.leftBracket} 
                            style={{
                                "borderColor": "#2d2d2d", 
                                "margin":"-3px 3px 10px 5px",
                                "height":"30px",
                                "width":"5px"
                            }} 
                        />
                        {utility.alpha_orange("0", "0")}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.S("1")} = {utility.S_black(props.stateIndex)}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.S_black("0")} )
                        
                        + {utility.blankSpace}{utility.alpha_orange("0", "1")}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.S("1")} = {utility.S_black(props.stateIndex)}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.S_black("1")} )
                    </MathContent>
                    
                    <MathContent extraStyle={{"margin":"-10px 0 5px 0"}}>
                        
                        + {utility.blankSpace}{utility.alpha_orange("0", "2")}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.S("1")} = {utility.S_black(props.stateIndex)}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.S_black("2")} )
                        
                        {!props.weatherExampleSelected ?
                            <div>
                                {utility.blankSpace}+ {utility.alpha_orange("0", "3")} {utility.multiply}{utility.blankSpace}
                                𝑃({utility.S("1")} = {utility.S_black(props.stateIndex)}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.S_black("3")} )
                            </div>
                        : null}
                        <div className={classes.rightBracket} 
                            style={{
                                "borderColor": "#2d2d2d", 
                                "margin":"-3px 3px 10px 3px",
                                "height":"30px",
                                "width":"5px"
                            }} 
                        />
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.O_black(props.exampleObservationSequence[1])}{utility.blankSpace}|{utility.blankSpace}{utility.S_black(props.stateIndex)})
                        {utility.blankSpace}=
                    </MathContent>
                    
                    {/* ALPHA-RAIN(2) IMAGES */}
                    <MathContent extraStyle={{"margin":"5px 0 5px 0"}}>
                        ={utility.blankSpace}
                        {utility.alpha_orange("1", utility.imageInText(props.exampleStatesImages[props.stateIndex]))}{utility.blankSpace}=
                        <div className={classes.leftBracket} 
                            style={{
                                "borderColor": "#2d2d2d", 
                                "margin":"-3px 3px 10px 5px",
                                "height":"30px",
                                "width":"5px"
                            }} 
                        />
                        {utility.alpha_orange("0", utility.imageInText(props.exampleStatesImages[0]))}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        𝑃({utility.S("1")} = {utility.imageInText(props.exampleStatesImages[props.stateIndex])}|{utility.blankSpace}{utility.S("0")} = {utility.imageInText(props.exampleStatesImages[0])} )
                        +
                    </MathContent>
                    
                    {props.weatherExampleSelected ? <div>
                        <MathContent extraStyle={{"margin":"-10px 0 5px 0"}}>
                            + {utility.blankSpace}{utility.alpha_orange("0", utility.imageInText(props.exampleStatesImages[1]))}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                            𝑃({utility.S("1")} = {utility.imageInText(props.exampleStatesImages[props.stateIndex])}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.imageInText(props.exampleStatesImages[1])} )
                            +
                        </MathContent>

                        <MathContent extraStyle={{"margin":"5px 0 5px 0"}}>
                            + {utility.blankSpace}{utility.alpha_orange("0", utility.imageInText(props.exampleStatesImages[2]))}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                            𝑃({utility.S("1")} = {utility.imageInText(props.exampleStatesImages[props.stateIndex])}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.imageInText(props.exampleStatesImages[2])} )
                                
                            <div className={classes.rightBracket} 
                                style={{
                                    "borderColor": "#2d2d2d", 
                                    "margin":"-3px 3px 10px 3px",
                                    "height":"30px",
                                    "width":"5px"
                                }} 
                            />
                            {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                            𝑃({utility.imageInText(props.exampleObservationsImages[props.exampleObservationSequence[1]])}{utility.blankSpace}|{utility.blankSpace}{utility.imageInText(props.exampleStatesImages[props.stateIndex])})
                            {utility.blankSpace}
                            =
                        
                        </MathContent>
                    </div> :

                    <div>
                        <MathContent extraStyle={{"margin":"-10px 0 5px 0"}}>
                            + {utility.blankSpace}{utility.alpha_orange("0", utility.imageInText(props.exampleStatesImages[1]))}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                            𝑃({utility.S("1")} = {utility.imageInText(props.exampleStatesImages[props.stateIndex])}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.imageInText(props.exampleStatesImages[1])} )
                            +
                        </MathContent>

                        <MathContent extraStyle={{"margin":"-10px 0 5px 0"}}>
                            + {utility.blankSpace}{utility.alpha_orange("0", utility.imageInText(props.exampleStatesImages[2]))}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                            𝑃({utility.S("1")} = {utility.imageInText(props.exampleStatesImages[props.stateIndex])}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.imageInText(props.exampleStatesImages[2])} )
                            +
                        </MathContent>

                        <MathContent extraStyle={{"margin":"5px 0 5px 0"}}>
                            + {utility.blankSpace}{utility.alpha_orange("0", utility.imageInText(props.exampleStatesImages[3]))}{utility.blankSpace} {utility.multiply} {utility.blankSpace}
                            𝑃({utility.S("1")} = {utility.imageInText(props.exampleStatesImages[props.stateIndex])}{utility.blankSpace}|{utility.blankSpace}{utility.S("0")} = {utility.imageInText(props.exampleStatesImages[3])} )
                                
                            <div className={classes.rightBracket} 
                                style={{
                                    "borderColor": "#2d2d2d", 
                                    "margin":"-3px 3px 10px 3px",
                                    "height":"30px",
                                    "width":"5px"
                                }} 
                            />
                            {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                            𝑃({utility.imageInText(props.exampleObservationsImages[props.exampleObservationSequence[1]])}{utility.blankSpace}|{utility.blankSpace}{utility.imageInText(props.exampleStatesImages[props.stateIndex])})
                            {utility.blankSpace}
                            =
                        
                        </MathContent>
                    </div>}
                    
                
                    <MathContent extraStyle={{"margin":"5px 0 5px 0"}}>
                        = 
                        <div className={classes.leftBracket} 
                            style={{
                                "borderColor": "#2d2d2d", 
                                "margin":"-3px 3px 10px 5px",
                                "height":"30px",
                                "width":"5px"
                            }} 
                        />

                        {props.exampleAlphaVector[0][0]} {utility.blankSpace} {utility.multiply} {utility.blankSpace} {props.exampleA[0][props.stateIndex]} +{utility.blankSpace}
                        {props.exampleAlphaVector[0][1]} {utility.blankSpace} {utility.multiply} {utility.blankSpace} {props.exampleA[1][props.stateIndex]} +{utility.blankSpace}
                        {props.exampleAlphaVector[0][2]} {utility.blankSpace} {utility.multiply} {utility.blankSpace} {props.exampleA[2][props.stateIndex]}
                        {!props.weatherExampleSelected ? <div>{utility.blankSpace}+{utility.blankSpace}{props.exampleAlphaVector[0][3]} {utility.multiply} {props.exampleA[3][props.stateIndex]}</div> : null}
                        <div className={classes.rightBracket} 
                            style={{
                                "borderColor": "#2d2d2d", 
                                "margin":"-3px 3px 10px 3px",
                                "height":"30px",
                                "width":"5px"
                            }} 
                        />
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {props.exampleB[props.stateIndex][props.exampleObservationSequence[1]]} =
                        {utility.blankSpace}
                        {
                            props.weatherExampleSelected ? 
                            utility.roundTo((props.exampleAlphaVector[0][0] * props.exampleA[0][props.stateIndex]) + (props.exampleAlphaVector[0][1] * props.exampleA[1][props.stateIndex]) + (props.exampleAlphaVector[0][2] * props.exampleA[2][props.stateIndex]), 5) :
                            utility.roundTo((props.exampleAlphaVector[0][0] * props.exampleA[0][props.stateIndex]) + (props.exampleAlphaVector[0][1] * props.exampleA[1][props.stateIndex]) + (props.exampleAlphaVector[0][2] * props.exampleA[2][props.stateIndex]) + (props.exampleAlphaVector[0][3] * props.exampleA[3][props.stateIndex]), 5)
                        }
                        
                        {utility.blankSpace} {utility.multiply} {utility.blankSpace}
                        {props.exampleB[props.stateIndex][props.exampleObservationSequence[1]]} ={utility.blankSpace}
                        {
                            props.weatherExampleSelected ? 
                            utility.roundTo(((props.exampleAlphaVector[0][0] * props.exampleA[0][props.stateIndex]) + (props.exampleAlphaVector[0][1] * props.exampleA[1][props.stateIndex]) + (props.exampleAlphaVector[0][2] * props.exampleA[2][props.stateIndex])) * props.exampleB[props.stateIndex][props.exampleObservationSequence[1]], 5) :
                            utility.roundTo(((props.exampleAlphaVector[0][0] * props.exampleA[0][props.stateIndex]) + (props.exampleAlphaVector[0][1] * props.exampleA[1][props.stateIndex]) + (props.exampleAlphaVector[0][2] * props.exampleA[2][props.stateIndex]) + (props.exampleAlphaVector[0][3] * props.exampleA[3][props.stateIndex])) * props.exampleB[props.stateIndex][props.exampleObservationSequence[1]], 5)
                        }
                    </MathContent>
        </div>
    )
}

export default ExampleAlphaOne;