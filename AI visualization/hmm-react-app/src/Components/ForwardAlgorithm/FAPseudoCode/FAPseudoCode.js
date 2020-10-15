import React from 'react';
import classes from './FAPseudoCode.module.scss';

import * as utility from '../../Common/Utility/utility';

const FAPseudoCode = (props) => {
    return (
        <>
            <p>
                <span style={{"color":"#FFA500", "fontWeight":"600"}}>Input:</span> The transition matrix {utility.pseudo_variable("A")}, 
                the observation matrix {utility.pseudo_variable("B")}, 
                the initial state distribution {utility.pseudo_variable("π")} and the observation 
                sequence {utility.pseudo_variable("o_seq")}. <br />
                <span style={{"color":"#FFA500", "fontWeight":"600"}}>Output:</span> A vector {utility.pseudo_variable("α_vector")} containing all the alphas.
            </p>

            <div className={classes.codeContainer}>
                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>1</div>
                    <div className={classes.codeRowContent}>
                    <span style={{"color":"#FFA500"}}>function</span> forward_algorithm<span style={{"color":"#53CBE8", "fontWeight":"400"}}>(</span>
                            {utility.pseudo_variable("A")},{utility.blankSpace}
                            {utility.pseudo_variable("B")},{utility.blankSpace}
                            {utility.pseudo_variable("π")},{utility.blankSpace}
                            {utility.pseudo_variable("o_seq")}<span style={{"color":"#53CBE8", "fontWeight":"400"}}>)</span>
                            <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{" {"}</span>
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>2</div>
                    <div className={[classes.codeRowContent, classes.commentRow].join(" ")} style={{"paddingLeft":"60px"}}>
                        // Calculate α0
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>3</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>
                        observation_0 = {utility.pseudo_variable("o_seq")}[ 0 ]
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>4</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>
                        <span style={{"color":"#FFA500"}}>for</span> i = 0 <span style={{"color":"#FFA500"}}>to </span>
                        N - 1 <span style={{"color":"#FFA500"}}>do</span> 
                        <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{" {"}</span>
                    </div>
                </div>
                
                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>5</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"110px"}}>
                        α<sub style={{"color":"#fff"}}>0</sub>[ i ] = {utility.pseudo_variable("π")}[ i ] {utility.multiply}{utility.blankSpace}
                        {utility.pseudo_variable("B")}[ i ][ observation_0 ]
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>6</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>
                        <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{"}"}</span>
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>7</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>
                        {utility.pseudo_variable("α_vector")}[ 0 ] =  α<sub style={{"color":"#fff"}}>0</sub>
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>8</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>

                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>9</div>
                    <div className={[classes.codeRowContent, classes.commentRow].join(" ")} style={{"paddingLeft":"60px"}}>
                        // Calculate α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>T-1</sub>
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>10</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>
                        <span style={{"color":"#FFA500"}}>for</span> t = 1 <span style={{"color":"#FFA500"}}>to </span>
                        T - 1 <span style={{"color":"#FFA500"}}>do</span> 
                        <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{" {"}</span>
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>11</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"110px"}}>
                        observation_t = {utility.pseudo_variable("o_seq")}[ t ]
                    </div>
                </div>
                
                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>12</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"110px"}}>
                        α<sub style={{"color":"#fff"}}>t-1</sub> = {utility.pseudo_variable("α_vector")}[ t-1 ]
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>13</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"110px"}}>
                        <span style={{"color":"#FFA500"}}>for</span> i = 0 <span style={{"color":"#FFA500"}}>to </span>
                        N - 1 <span style={{"color":"#FFA500"}}>do</span> 
                        <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{" {"}</span>
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>14</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"160px"}}>
                        sum = 0
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>15</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"160px"}}>
                        <span style={{"color":"#FFA500"}}>for</span> j = 0 <span style={{"color":"#FFA500"}}>to </span>
                        N - 1 <span style={{"color":"#FFA500"}}>do</span> 
                        <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{" {"}</span>
                    </div>
                </div>
                
                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>16</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"210px"}}>
                        sum += α<sub style={{"color":"#fff"}}>t-1</sub>[ j ] {utility.multiply} {utility.pseudo_variable("A")}[ j ][ i ]
                    </div>
                </div>
                
                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>17</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"160px"}}>
                        α<sub style={{"color":"#fff"}}>t</sub>[ i ] = sum {utility.multiply} {utility.pseudo_variable("B")}[ i ][ observation_t ]
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>18</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"110px"}}>
                        {utility.pseudo_variable("α_vector")}[ t ] = α<sub style={{"color":"#fff"}}>t</sub>
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>19</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>
                        <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{"}"}</span>
                    </div>
                </div>
                
                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>20</div>
                    <div className={classes.codeRowContent} style={{"paddingLeft":"60px"}}>
                    <span style={{"color":"#FFA500", "fontWeight":"600"}}>return</span> {utility.pseudo_variable("α_vector")}
                    </div>
                </div>

                <div className={classes.codeRow}>
                    <div className={classes.codeRowNumber}>21</div>
                    <div className={classes.codeRowContent}>
                        <span style={{"color":"#53CBE8", "fontWeight":"400"}}>{" }"}</span>
                    </div>
                </div>
            </div>
        </>
    )

}


export default FAPseudoCode;