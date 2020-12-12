import React from 'react';
import classes from './importantInfo.module.scss';


const ImportantInfo = (props) => {
    return (
        <div className={classes.ImportantInfo} style={props.extraStyle !== undefined ? props.extraStyle : null}>
            <p>{props.children}</p>
        </div>
    )
}


export default ImportantInfo;