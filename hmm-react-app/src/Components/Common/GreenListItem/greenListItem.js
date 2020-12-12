import React from 'react';

import classes from './greenListItem.module.scss';

const GreenListItem = (props) => {
    return (
        <li className={classes.listItemStyle}>
            <span>
                <b style={{"color":"#6EC668", "marginRight":"8px"}}>{props.title}</b>
                {props.children}
            </span>
        </li>
    )
}

export default GreenListItem;