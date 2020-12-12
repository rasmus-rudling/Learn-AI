import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import classes from './hiddenMarkovModel.module.scss';

import theBasicsBackgroundImg from '../../Resources/Images/Backgrounds/bg5_blur_dark.png';
import forwardAlgorithmBackgroundImg from '../../Resources/Images/Backgrounds/bg2_blur_dark.png';
import backwardAlgorithmBackgroundImg from '../../Resources/Images/Backgrounds/bg6_blur_dark.png';
import viterbiAlgorithmBackgroundImg from '../../Resources/Images/Backgrounds/bg4_blur_dark.png';
import baumWelchAlgorithmBackgroundImg from '../../Resources/Images/Backgrounds/bg3_blur_dark.png';
import advancedTopicsBackgroundImg from '../../Resources/Images/Backgrounds/bg1_blur_dark.png';


import SectionCard from '../Common/SectionCard/sectionCard';

const HiddenMarkovModel = () => {
    const history = useHistory();

    return (
        <div>
            <h1>Hidden Markov Model</h1>

            <div className={classes.sectionCardsContainer}>
                <Link to="/hmm/theBasics">
                    <SectionCard 
                        backgroundImage={theBasicsBackgroundImg} 
                        title="The basics"
                    />
                </Link>

                <Link to="/hmm/forwardAlgorithm">
                    <SectionCard 
                        backgroundImage={forwardAlgorithmBackgroundImg} 
                        title="Forward Algorithm" 
                    />
                </Link>

                <Link to="/hmm/backwardAlgorithm">
                    <SectionCard 
                        backgroundImage={backwardAlgorithmBackgroundImg} 
                        title="Backward Algorithm"
                        inActive = {true}
                    />
                </Link>

                <Link to="/hmm/viterbiAlgorithm">
                    <SectionCard 
                        backgroundImage={viterbiAlgorithmBackgroundImg} 
                        title="Viterbi Algorithm" 
                        inActive = {true}
                    />
                </Link>

                <Link to="/hmm/baumWelchAlgorithm">
                    <SectionCard 
                        backgroundImage={baumWelchAlgorithmBackgroundImg} 
                        title="Baum-Welch Algorithm" 
                        inActive = {true}
                    />
                </Link>

                <Link to="/hmm/advancedTopics">
                    <SectionCard 
                        backgroundImage={advancedTopicsBackgroundImg} 
                        title="Advanced Topics" 
                        inActive = {true}
                    />
                </Link>
            </div>
        </div>
    )
}

export default HiddenMarkovModel;