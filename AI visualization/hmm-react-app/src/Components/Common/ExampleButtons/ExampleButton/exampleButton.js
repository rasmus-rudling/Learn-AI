import React from 'react';
import classes from './exampleButton.module.scss';


const ExampleButton = (props) => {
    let stylesList = [classes.ExampleButton];

    if (props.active) {
        stylesList = [...stylesList, classes.activeBorder]
    } else {
        stylesList = [...stylesList, classes.inActiveBorder]
    }

    return (
        <div 
            className={stylesList.join(" ")}

            style = { props.example === "Weather example" ? 
                {"backgroundImage":`url(${props.backgroundImg})`, "marginBottom":"10px"} :
                {"backgroundImage":`url(${props.backgroundImg})`}
            }
        >
            <p>{props.example}</p>
        </div>
    )
}

export default ExampleButton;