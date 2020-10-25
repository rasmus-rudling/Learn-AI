import React from 'react';

import classes from './extraInfo.module.scss';

const ExtraInfo = (props) => {
    return (
        <div className={classes.ExtraInfo}>
            <b style={{"color":"#6EC668", "marginRight":"8px"}}>{props.infoType}</b>
            {props.children}
        </div>
    )
}

export default ExtraInfo;