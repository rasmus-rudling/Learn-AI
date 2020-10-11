import React, { useRef, useState, useEffect } from 'react';
import classes from './subsection.module.scss';
import downArrow from '../../../Resources/Icons/down-arrow.svg';


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
        <div 
            className={classes.Subsection} 
            style={props.newWidth !== undefined ? {"width":props.newWidth} : {}}
        >
            <div 
                className={classes.headerContainer}
                style={props.newWidth !== undefined ? {"gridTemplateColumns": "92% 8%", "borderRadius":"10px"} : {}}
            >
                <div 
                    className={headerPartClassList.join(" ")} 
                    ref={headerPartElement}
                    style={props.newWidth !== undefined ? 
                        {"backgroundColor":props.headerBackgroundColor} : {}}
                >
                    <h2>{props.header}</h2>
                </div>

                <div 
                    className={arrowClassList.join(" ")}
                    ref={arrowContainerElement}
                    onClick = {() => toggleContent()}
                    style={props.newWidth !== undefined ? {"backgroundColor":props.buttonColor} : {}}
                >
                    <img src = {downArrow} alt="arrow" ref={arrowElement} className={props.hideDefault ? classes.rotateArrow : ""}/>
                </div>
            </div>
            
            <div 
                style={props.newWidth !== undefined ? 
                    {"backgroundColor":props.contentBackgroundColor,
                    "maxHeight": maxHeight, 
                    "paddingTop": paddingForContent, 
                    "paddingBottom": paddingForContent,
                    "borderRadius":"0px 0px 10px 10px"}
                    : 
                    {"maxHeight": maxHeight, 
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