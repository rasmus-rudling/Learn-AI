import React from 'react';
import classes from './subsection.module.css';


const Subsection = (props) => {
    return (
        <div className={classes.Subsection}>
            <div className={classes.headerPart}>
                <h2>{props.header}</h2>

                <div className={classes.showHideContentToggler}>
                
                </div>
            </div>

            <div className={classes.contentPart}>
                {props.children}
            </div>
            
        </div>
    );
}

export default Subsection;