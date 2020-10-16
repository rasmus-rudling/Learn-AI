import React from 'react';
import classes from './userExampleInput.module.scss';


const UserExampleInput = (props) => {

    return (
        <div className={classes.UserExampleInput}>
            <form>
                <input 
                    type="text" 
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
                />
            </form>
        </div>
    )
}


export default UserExampleInput;