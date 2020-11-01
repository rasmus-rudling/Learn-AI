import React, { useRef, useState, useEffect } from 'react';
import classes from './subsection.module.scss';
import downArrow from '../../../Resources/Icons/down-arrow.svg';


const Subsection = (props) => {
    const contentPartElement = useRef(null);
    const arrowElement = useRef(null);
    const arrowContainerElement = useRef(null);
    const headerPartElement = useRef(null);
    const elementContainer = useRef(null);

    const [contentHeight, setContentHeight] = useState("auto");
    const [hideContent, setHideContent] = useState(false);
    const [arrowClassList, setArrowClassList] = useState([classes.showHideContentToggler, classes.applyRadiusBottomRight]);
    const [headerPartClassList, setHeaderPartClassList] = useState([classes.headerPart, classes.applyRadiusBottomLeft]);
    const [maxHeight, setMaxHeight] = useState(hideContent ? "0px" : contentHeight);
    const [paddingForContent, setPaddingForContent] = useState(hideContent ? "0px" : "20px");
    const [allSubClasses, setAllSubClasses] = useState([classes.Subsection]);

    const exampleMode = props.newWidth !== undefined;

    const toggleContent = () => {
        arrowElement.current.classList.toggle(classes.rotateArrow);
        arrowContainerElement.current.classList.toggle(classes.applyRadiusBottomRight);
        headerPartElement.current.classList.toggle(classes.applyRadiusBottomLeft);
        setMaxHeight(maxHeight === "0px" ? contentHeight : "0px");
        setPaddingForContent(paddingForContent === "0px" ? "20px" : "0px");
    }

    useEffect(() => {
        let elementHeight = contentPartElement.current.offsetHeight;
        setContentHeight(elementHeight);

        if (window.innerWidth <= 850) {
            setHideContent(false);
            setMaxHeight(elementHeight);
            setPaddingForContent("20px");
            
        } else {
            setHideContent(props.hideDefault);
            setMaxHeight("0px");
            setPaddingForContent("0px");
            
        }

        if (!hideContent) {
            setArrowClassList([classes.showHideContentToggler, classes.applyRadiusBottomRight]);
            setHeaderPartClassList([classes.headerPart, classes.applyRadiusBottomLeft]);
        } else {
            setArrowClassList([classes.showHideContentToggler]);
            setHeaderPartClassList([classes.headerPart]);
        }

        if (exampleMode) {
            setArrowClassList([...arrowClassList, classes.exampleModeHover]);
        }
    
        if (props.extraClass !== undefined) {
            setAllSubClasses([classes.Subsection, props.extraClass]);
        } else {
            setAllSubClasses([classes.Subsection]);
        }

        setTimeout(() => { 
            contentPartElement.current.style.opacity = 1;
            elementContainer.current.style.backgroundColor = "#fff";

            if (!props.hideDefault) {
                arrowContainerElement.current.classList.toggle(classes.applyRadiusBottomRight);
                headerPartElement.current.classList.toggle(classes.applyRadiusBottomLeft);
                setMaxHeight(elementHeight);
                setPaddingForContent("20px");
            }
        }, 750);
    }, [])

    return (
        <div 
            className={allSubClasses.join(" ")} 
            style={exampleMode ? {"width":props.newWidth} : {}}
            ref = {elementContainer}
        >
            <div 
                className={classes.headerContainer}
                style={exampleMode ? {"gridTemplateColumns": (window.innerWidth < 850 ? "100% 0%" : "92% 8%"), "borderRadius":"10px"} : {}}
            >
                <div 
                    className={headerPartClassList.join(" ")} 
                    ref={headerPartElement}
                    style={exampleMode ? 
                        {"backgroundColor":props.headerBackgroundColor} : {}}
                >
                    <h2>{props.header}</h2>
                </div>

                <div 
                    className={arrowClassList.join(" ")}
                    ref={arrowContainerElement}
                    onClick = {() => toggleContent()}
                    style = {window.innerWidth < 850 ? {"display":"none"} : null}
                >
                    <img src = {downArrow} alt="arrow" ref={arrowElement} className={props.hideDefault ? classes.rotateArrow : ""}/>
                </div>
            </div>
            
            <div 
                style={exampleMode ? 
                    {"backgroundColor":props.contentBackgroundColor,
                    "maxHeight": maxHeight, 
                    "paddingTop": paddingForContent, 
                    "paddingBottom": paddingForContent,
                    "borderRadius":"0px 0px 10px 10px"}
                    : 
                    {"maxHeight": maxHeight, 
                    "paddingTop": paddingForContent, 
                    "paddingBottom": paddingForContent}
                } 
                className={classes.contentPart} 
                ref={contentPartElement}
            >
                {props.children}
            </div>
            
        </div>
    );
}

export default Subsection;