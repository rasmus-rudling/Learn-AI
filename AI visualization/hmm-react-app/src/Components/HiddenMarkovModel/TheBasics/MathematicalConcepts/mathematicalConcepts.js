import React from 'react';

import * as utility from '../../../Common/Utility/utility';
import classes from './mathematicalConcepts.module.scss';
import theBasicsBackgroundImage from '../../../../Resources/Images/Backgrounds/bg5.png';

import BackButton from '../../../Common/BackButton/backButton';
import Subsection from '../../../Common/Subsection/subsection';
import HomeButton from '../../../Common/HomeButton/homeButton';
import MathContent from '../../../Common/MathContent/mathContent';
import ExtraInfo from '../../../Common/ExtraInfo/extraInfo';
import SumChar from '../../../Common/SumChar/sumChar';
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
                hideDefault={true}
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
                hideDefault={false}
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
            </Subsection>
        </div>
    )
}

export default MathematicalConcepts;