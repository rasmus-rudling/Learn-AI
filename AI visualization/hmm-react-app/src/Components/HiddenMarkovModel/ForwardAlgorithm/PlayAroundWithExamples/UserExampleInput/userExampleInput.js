import React from 'react';
import classes from './userExampleInput.module.scss';


const UserExampleInput = (props) => {
    let value = props.value;

    if (value > props.maxValue) {
        props.changeSettingsHandler(props.typeOfSetting, props.maxValue)
    }

    return (
        <div className={classes.UserExampleInput}>
            <form>
                <input 
                    type="text"
                    value={value}
                    onChange={e => {
                        let newValue = e.target.value;

                        if (newValue.length > 1) {
                            newValue = newValue.charAt(1);
                        }

                        newValue = newValue.replace(/\D/g,'');
                        if (newValue > props.maxValue) {
                            e.target.value = props.maxValue;
                            newValue = props.maxValue;
                        } else if (newValue < props.minValue) {
                            e.target.value = props.minValue;
                            newValue = props.minValue;
                        } else {
                            e.target.value = newValue;
                        }

                        props.changeSettingsHandler(props.typeOfSetting, newValue)
                    }}

                    onClick={e => e.target.select()}

                    onKeyDown={e => {
                        let valueInInput = e.target.value;
                        if (e.key === "ArrowDown") {
                            if (valueInInput > props.minValue) {
                                props.changeSettingsHandler(props.typeOfSetting, parseInt(valueInInput) - 1);
                            }
                        } else if (e.key === "ArrowUp") {
                            if (valueInInput < props.maxValue) {
                                props.changeSettingsHandler(props.typeOfSetting, parseInt(valueInInput) + 1);
                            }
                        }
                    }}
                />
            </form>
        </div>
    )
}


export default UserExampleInput;