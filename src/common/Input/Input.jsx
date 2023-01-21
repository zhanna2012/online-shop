import React from 'react';

import './Input.scss';

function Input(props) {
    return (
        <div className = "input__box">
            <label>{props.labelText}</label>
            <input type={props.type}
                   placeholder={props.placeholderText}
                   onChange = {props.onChange}
                   className = "input__search"
                   name={props.name}
                   onBlur={props.onBlur}
                   value={props.value}/>
        </div>
    );
}
export default Input;
