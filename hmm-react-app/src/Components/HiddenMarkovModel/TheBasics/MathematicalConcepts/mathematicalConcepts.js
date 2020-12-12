import React from 'react';

import * as utility from '../../../Common/utility';
import classes from './mathematicalConcepts.module.scss';
import theBasicsBackgroundImage from '../../../../Resources/Images/Backgrounds/bg5.png';
import vennDiagram1 from '../../../../Resources/Other/venn-diagram-1.svg';
import vennDiagram2 from '../../../../Resources/Other/venn-diagram-2.svg';

import BackButton from '../../../Common/BackButton/backButton';
import Subsection from '../../../Common/Subsection/subsection';
import HomeButton from '../../../Common/HomeButton/homeButton';
import MathContent from '../../../Common/MathContent/mathContent';
import ExtraInfo from '../../../Common/ExtraInfo/extraInfo';
import SumChar from '../../../Common/MathContent/SumChar/sumChar';
import Division from '../../../Common/MathContent/Division/division';
import GreenListItem from '../../../Common/GreenListItem/greenListItem';

const MathematicalConcepts = () => {
    return (
        <div>
            <img src = {theBasicsBackgroundImage} className="backgroundImage" alt="" />
            <HomeButton extraClass={classes.homeButton}/>

            <h1>Mathematical Concepts</h1>
            <BackButton />

            <Subsection 
                header = "Denotations" 
                hideDefault={false}
            >
                <ul className="greenList">
                    <GreenListItem title="Not (¬)">
                        When we use the character "<mark className="green">¬</mark>", we mean "<mark className="green">not</mark>". As 
                        an example, "¬sunny" = "not sunny".
                    </GreenListItem>

                    <GreenListItem title="For all (∀)">
                        When we use the character "<mark className="green">∀</mark>", we mean "<mark className="green">for all</mark>". E.g. 
                        "∀ cats C, C has four legs" = "for all cats C, C has four legs".
                    </GreenListItem>

                    <GreenListItem title="In (∈)">
                        The character "<mark className="green">∈</mark>" is read "<mark className="green">in</mark>" and will be used to describe the relationship between a set and a element.
                        E.g. if we have the set 𝑋 = {utility.curlyLeft} <b>a</b>, <b>b</b>, <b>c</b> {utility.curlyRight}, then we 
                        could write "<b>a</b> ∈ 𝑋" to point out that <b>a</b> is a
                        member of the set 𝑋. Furthermore, we can write "<b>d</b> ∉ 𝑋" to point out that <b>d</b> is not a
                        member of the set 𝑋.
                    </GreenListItem>

                    <GreenListItem title={
                        <mark className="green">
                            Permutations (S<sub>
                                <mark className="green">n</mark>
                            </sub>)
                        </mark>
                    }>
                         The set S<sub>n</sub> is used to denote all possible permutations of a set of
                        length n. E.g. if we look at the set 𝑋 = {utility.curlyLeft} <b>a</b>, <b>b</b>, <b>c</b> {utility.curlyRight}. Then S<sub>3</sub>(𝑋) = 
                        {utility.curlyLeft} (<b>abc</b>), (<b>acb</b>), (<b>bac</b>), (<b>bca</b>), 
                        (<b>cab</b>), (<b>cba</b>) {utility.curlyRight}.
                    </GreenListItem>

                    <GreenListItem title="Sum (∑)">
                        We will use two ways of summing: <i>summing by indices</i> and <i>summing over
                        elements in a set</i>. When we sum using indices, the notation looks like this:

                        <MathContent extraStyle={{"margin":"25px 0 0 0"}}>
                            <SumChar top={<mark className="red">5</mark>} bottom={<div>k = <mark className="green">0</mark></div>}/> k =
                            {utility.blankSpace}<mark className="green">0</mark>{utility.blankSpace} + 1 + 2 + 3 + 4 + {utility.blankSpace}<mark className="red">5</mark>
                            {utility.blankSpace}= 15
                        </MathContent>

                        Let's say that we have a set 𝑌 = {utility.curlyLeft} 5, 8, 3 {utility.curlyRight}. Then we can use the 
                        following notation to sum over all the elements:

                        <MathContent extraStyle={{"margin":"0 0 0 0"}}>
                            <SumChar top="" bottom={<div>y ∈ 𝑌</div>}/> y =
                            5 + 8 + 3 = 16
                        </MathContent>
                    </GreenListItem>

                    <GreenListItem title="Union (⋃)">
                    We use union to denote the merging of two sets. That is, if we have two
                    sets A = {utility.curlyLeft} <b>a</b>, <b>b</b>, <b>c</b> {utility.curlyRight} and B = {utility.curlyLeft} <b>c</b>, <b>d</b>, <b>e</b> {utility.curlyRight}. 
                    Then A ⋃ B = {utility.curlyLeft} <b>a</b>, <b>b</b>, <b>c</b>, <b>d</b>, <b>e</b> {utility.curlyRight}. Note that we only
                    declare <b>c</b> once. Union can also be interpreted as "OR" (in this context, OR is usually
                    written in capital letters). Hence A OR B = {utility.curlyLeft} <b>a</b>, <b>b</b>, <b>c</b>, <b>d</b>, <b>e</b> {utility.curlyRight} as well.
                    </GreenListItem>

                    <GreenListItem title="Intersection (⋂)">
                        We use intersection to denote what two sets have in common. That
                        is, if we again have the two sets A = {utility.curlyLeft} <b>a</b>, <b>b</b>, <b>c</b> {utility.curlyRight} and
                        B = {utility.curlyLeft} <b>c</b>, <b>d</b>, <b>e</b> {utility.curlyRight}. Then A ⋂ B = {utility.curlyLeft} <b>c</b> {utility.curlyRight}.
                        Note that we only declare <b>c</b> once. Intersection can also be interpreted as "AND" (in
                        this context, AND is usually written in capital letters). Hence A AND B = {utility.curlyLeft} <b>c</b> {utility.curlyRight} as well.
                    </GreenListItem>
                </ul>
            </Subsection>

            <ExtraInfo infoType="Caveat">
                Throughout this site, I'm trying my best to use the words "<i>probability</i>" and
                "<i>likelihood</i>" in their proper context. However, there's a lot of content to cover on this site,
                why there is a risk of me mixing the two together. Therefore, take those notations with a
                pinch of salt.
            </ExtraInfo>

            <Subsection 
                header = "Rule of Sum" 
                hideDefault={true}
            >
                <ul style={{"margin":"0 0 0 5px"}}>
                    <GreenListItem title="Mutually exclusive events">
                        If two events are mutually exclusive, they cannot happen at
                        the same time. E.g. if we roll a normal six-sided dice. Let E<sub>1</sub> = {utility.curlyLeft} <i>a four is rolled</i> {utility.curlyRight} be the
                        first event and E<sub>2</sub> = {utility.curlyLeft} <i>a three is rolled</i> {utility.curlyRight} the second. Then E<sub>1</sub> and E<sub>2</sub> are mutually
                        exclusive, because both events cannot happen at the same time. Conversely, if we
                        have the events E<sub>3</sub> = {utility.curlyLeft} <i>a 1, 3 or 6 is rolled</i> {utility.curlyRight} and E<sub>4</sub> = {utility.curlyLeft} <i>a 2, 3 or 5 is rolled</i> {utility.curlyRight} the events are
                        not mutually exclusive. Because if we roll a three, both event E<sub>3</sub> and E<sub>4</sub> occur at the
                        same time.
                    </GreenListItem>
                </ul>
                
                <p style={{"margin":"10px 0 0 0"}}>
                    Let 𝑋 and 𝑌 be two mutually exclusive events, then:
                </p>

                <MathContent extraStyle={{"margin":"4px 0 5px 0px"}}>
                    𝑃(𝑋 ⋃ 𝑌) = 𝑃(𝑋) + 𝑃(𝑌)
                </MathContent>

                <p>
                    Let's illustrate this further with a Venn diagram where 𝑆<sub>1</sub> is the sample space:
                </p>

                <img src={vennDiagram1} style={{"height":"200px", "margin":"3px auto 5px auto", "display":"block"}} />

                <p>
                    The goal with the sum rule is to calculate the probability that some of the events 𝑋 and
                    𝑌 happens. As we know, 𝑋 and 𝑌 are mutually exclusive, meaning they cannot occur at
                    the same time. Therefore, the probability that some of the events happen is the sum of
                    their individual probability. Hence, 𝑃(𝑋) + 𝑃(𝑌).
                </p>

                <p style={{"marginTop":"10px"}}>
                    Now let's say that we have two other events, 𝐴 and 𝐵, which are not mutually exclusive.
                    That is, they can occur at the same time. Then the total probability of some of the
                    events 𝐴 and 𝐵 to occur is:
                </p>

                <MathContent extraStyle={{"margin":"4px 0 5px 0px"}}>
                    𝑃(𝐴 ⋃ 𝐵) = 𝑃(𝐴) + 𝑃(𝐵){utility.blankSpace}<mark className="blue">− 𝑃(𝐴 ⋂ 𝐵)</mark> 
                </MathContent>

                Why{utility.blankSpace}<mark className="blue">− 𝑃(𝐴 ⋂ 𝐵)</mark>? Let's have a look at the following Venn diagram:

                <img src={vennDiagram2} style={{"height":"200px", "margin":"3px auto 5px auto", "display":"block"}} />

                As we can see in the dark are in the middle, we have accounted for the overlapping
                section two times. That is, we have counted the scenarios when both A and B
                happens two times. And since we are only interested in the probability that some of
                the events happen, we have to subtract for one of those times. Hence,{utility.blankSpace}<mark className="blue">− 𝑃(𝐴 ⋂ 𝐵)</mark>.
            </Subsection>

            <Subsection 
                header="Conditional Probability"
                hideDefault = {true}
            >
                <p>
                    A conditional probability is a probability that a certain event will occur given information
                    about the outcome of some other event. Let 𝑋 and 𝑌 be two events, then:
                </p>

                <MathContent extraStyle={{"margin":"4px 0 5px 0px", "alignItems":"center"}}>
                    <mark className="green">𝑃(𝑋 | 𝑌)</mark>{utility.blankSpace}={utility.blankSpace}
                    <Division 
                        numerator = {<mark className="blue">𝑃(𝑋 ⋂ 𝑌)</mark>}
                        denominator = {<mark className="red">𝑃(𝑌)</mark>}
                    />
                </MathContent>
                
                <p>
                    That is, the <mark className="green">probability that event X occurs given that event Y occurred</mark> is equivalent to
                    {utility.blankSpace}the <mark className="blue">probability that both X and Y happens at the same time</mark> divided by the <mark className="red">probability
                    that Y happens</mark>.
                </p>
            </Subsection>

            <Subsection
                header="Rule of Product"
                hideDefault={true}
            >
                <ul style={{"margin":"0 0 0 5px"}}>
                    <GreenListItem title="Independent events">
                        In the context of probability, we call two events <i>independent</i> if the
                        occurrence of one of the events doesn't affect the probability of the other event
                        occurring. E.g. if we roll a six-sided dice twice. Let E<sub>1</sub> = {utility.curlyLeft} <i>a four is obtained on the first
                        roll</i> {utility.curlyRight} be the first event and E<sub>2</sub> = {utility.curlyLeft} <i>a six is obtained on the second roll</i>
                        {utility.curlyRight} the second. Then,
                        if we would successfully roll a four at the first throw, the probability of rolling a six on
                        the second throw wouldn't be affected. In a more mathematical context we can write
                        the following: 𝑃( E<sub>2</sub> | E<sub>1</sub> ) = P( E<sub>2</sub> ). That is, the probability that we roll a six on the second
                        throw given that we rolled a four on the first row is equivalent with the probability that
                        we roll a six given no additional information.
                    </GreenListItem>

                    <GreenListItem title="Dependent events">
                        Conversely from the previous section, if the occurrence of one event
                        does affect the probability of the other event taking place, then we call the events
                        <i>dependent</i>. Let's look at an example of two such events. Let E<sub>3</sub> = {utility.curlyLeft} <i>the sun is shining</i> {utility.curlyRight}
                        be the first event and E<sub>4</sub> = {utility.curlyLeft} <i>Kim wears sunglasses</i> {utility.curlyRight} be the second. If event E<sub>3</sub> occurs,
                        we can reason that Kim probably will wear sunglasses. Therefore, the events E<sub>3</sub> and E<sub>4</sub>
                        are dependent. If the two events are dependent, then 𝑃( E<sub>4</sub> | E<sub>3</sub> ) ≠ P( E<sub>4</sub> ), because the
                        probability of E<sub>4</sub> occurring given that E<sub>3</sub> occurred is higher then if observed E<sub>4</sub> with no
                        additional information.
                    </GreenListItem>
                </ul>

                <p style={{"marginTop":"10px"}}>
                    Let 𝑋 and 𝑌 be two <b>independent events</b>, then:
                </p>
                
                <MathContent extraStyle={{"margin":"4px 0 5px 0px"}}>
                    𝑃(𝑋 ⋂ 𝑌) = 𝑃(𝑋) × 𝑃(𝑌)
                </MathContent>

                <p>
                    That is, we find the probability that both event 𝑋 and event 𝑌 occur at the same time by
                    multiplying the individual probabilities 𝑃(𝑋) and 𝑃(𝑌). Let's again look at the two
                    independent events E<sub>1</sub> = {utility.curlyLeft} <i>a four is obtained on the first roll</i> {utility.curlyRight} and E<sub>2</sub> = 
                    {utility.curlyLeft} <i>a six is obtained
                    on the second roll</i> {utility.curlyRight}. We know that 𝑃(E<sub>1</sub>) = 1/6 and that 𝑃(E<sub>2</sub>) = 1/6. Therefore, the
                    probability that both E<sub>1</sub> and E<sub>2</sub> occurs is 𝑃(E<sub>1</sub> ⋂ E2) = 𝑃(E<sub>1</sub>) × 𝑃(E<sub>2</sub>) = 1/6 × 1/6 = 1/36.
                </p>

                <p style={{"marginTop":"10px"}}>
                    Let 𝐴 and 𝐵 be two <b>dependent</b> events, then:
                </p>
                
                <MathContent extraStyle={{"margin":"4px 0 5px 0px"}}>
                    𝑃(𝐴 ⋂ 𝐵) = 𝑃(𝐴) × 𝑃(𝐵 | 𝐴) = 𝑃(𝐵) × 𝑃(𝐴 | 𝐵) 
                </MathContent>

                <p>
                    To better understand why the intersection of 𝐴 and 𝐵 is equal to the expression above,
                    check out the conditional probability section. The expression above is a direct derivation
                    from conditional probability.
                </p>
            </Subsection>

            <Subsection
                header="Bayes' rule"
                hideDefault={true}
            >
                If we think about the example given above, where we have the two events E<sub>3</sub> = {utility.curlyLeft} <i>the sun
                is shining</i> {utility.curlyRight} and E<sub>4</sub> = {utility.curlyLeft} <i>Kim wears sunglasses</i> {utility.curlyRight}. Then we said that if the sun is shining,
                then Kim probably wear sunglasses. In other words P( E<sub>4</sub> | E<sub>3</sub> ) ≥ P( E<sub>4</sub> | ¬E<sub>3</sub> ). But what if
                we are interested in the probability that the sun is shining? And would information about
                Kim wearing sunglasses affect that probability? The answer is yes and we can find out
                the answer using <b>Bayes' rule</b>:

                <MathContent extraStyle={{"margin":"4px 0 5px 0px", "alignItems":"center"}}>
                    𝑃(𝑋 | 𝑌) ={utility.blankSpace}
                    <Division 
                        numerator = "𝑃(𝑌 | 𝑋)"
                        denominator = "𝑃(𝑌)"
                    />
                    {utility.blankSpace}× 𝑃(𝑋)
                </MathContent>

                <p>
                    As we can see with Bayes' rule, dependent probabilities affects each other in both directions. 
                </p>

            </Subsection>

            
        </div>
    )
}

export default MathematicalConcepts;