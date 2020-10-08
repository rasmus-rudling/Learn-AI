import React, { useRef, useState, useEffect } from 'react';
import classes from './subsection.module.scss';
import downArrow from '../../../Resources/down-arrow.svg';


const Subsection = (props) => {
    const contentPartElement = useRef(null);
    const arrowElement = useRef(null);
    const arrowContainerElement = useRef(null);
    const headerPartElement = useRef(null);
    const [maxHeight, setMaxHeight] = useState(props.hideDefault ? "0px" : props.maxHeight);
    const [paddingForContent, setPaddingForContent] = useState(props.hideDefault ? "0px" : "20px");

    const toggleContent = () => {
        arrowElement.current.classList.toggle(classes.rotateArrow);
        arrowContainerElement.current.classList.toggle(classes.applyRadiusBottomRight);
        headerPartElement.current.classList.toggle(classes.applyRadiusBottomLeft);
        setMaxHeight(maxHeight == "0px" ? props.maxHeight : "0px");
        setPaddingForContent(paddingForContent == "0px" ? "20px" : "0px");
    }

    let arrowClassList, headerPartClassList;

    if (props.hideDefault) {
        arrowClassList = [classes.showHideContentToggler, classes.applyRadiusBottomRight];
        headerPartClassList = [classes.headerPart, classes.applyRadiusBottomLeft];
    } else {
        arrowClassList = [classes.showHideContentToggler];
        headerPartClassList = [classes.headerPart];
    }

    return (
        <div className={classes.Subsection}>
            <div className={classes.headerContainer}>
                <div className={headerPartClassList.join(" ")} ref={headerPartElement}>
                    <h2>{props.header}</h2>
                </div>

                <div 
                    className={arrowClassList.join(" ")}
                    ref={arrowContainerElement}
                    onClick = {() => toggleContent()}
                >
                    <img src = {downArrow} alt="arrow" ref={arrowElement} className={props.hideDefault ? classes.rotateArrow : ""}/>
                </div>
            </div>
            
            <div 
                style={{
                    "maxHeight": maxHeight, 
                    "paddingTop": paddingForContent, 
                    "paddingBottom": paddingForContent}} 
                className={classes.contentPart} 
                ref={contentPartElement}
            >
                {props.children}
            </div>
            
        </div>
    );
}

export default Subsection;