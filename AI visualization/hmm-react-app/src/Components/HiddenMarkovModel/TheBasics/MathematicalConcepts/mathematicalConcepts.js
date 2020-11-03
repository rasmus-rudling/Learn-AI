import React from 'react';

import * as utility from '../../../Common/Utility/utility';
import classes from './mathematicalConcepts.module.scss';
import theBasicsBackgroundImage from '../../../../Resources/Images/Backgrounds/bg5.png';

import BackButton from '../../../Common/BackButton/backButton';
import Subsection from '../../../Common/Subsection/subsection';
import HomeButton from '../../../Common/HomeButton/homeButton';
import MathContent from '../../../Common/MathContent/mathContent';
import ExtraInfo from '../../../Common/ExtraInfo/extraInfo';
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
                </ul>
            </Subsection>
        </div>
    )
}

export default MathematicalConcepts;