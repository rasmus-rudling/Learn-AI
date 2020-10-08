import React from 'react';
import classes from './subsection.module.css';
import downArrow from '../../../Resources/down-arrow.svg';


const Subsection = (props) => {
    return (
        <div className={classes.Subsection}>
            <div className={classes.headerContainer}>
                <div className={classes.headerPart}>
                    <h2>{props.header}</h2>
                </div>

                <div className={classes.showHideContentToggler} >
                    <img src = {downArrow} alt="arrow" />
                </div>
            </div>
            

            <div className={classes.contentPart}>
                {props.children}
            </div>
            
        </div>
    );
}

export default Subsection;