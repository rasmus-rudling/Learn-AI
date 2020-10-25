import React from 'react';

import classes from './sectionCard.module.scss';

const SectionCard = (props) => {
    return (
        <div 
            className={classes.SectionCard}
            style={{"backgroundImage":`url(${props.backgroundImage})`}}
        >
            <h2>{props.title}</h2>
        </div>
    )
}

export default SectionCard;