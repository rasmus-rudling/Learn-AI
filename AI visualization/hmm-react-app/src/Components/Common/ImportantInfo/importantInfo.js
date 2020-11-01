import React from 'react';
import classes from './importantInfo.module.scss';


const ImportantInfo = (props) => {
    return (
        <div className={classes.ImportantInfo} style={props.extraStyle !== undefined ? props.extraStyle : null}>
            <div className={classes.horizontalLine1} />
            <p>{props.children}</p>

            <div className={classes.horizontalLine2} />
        </div>
    )
}


export default ImportantInfo;