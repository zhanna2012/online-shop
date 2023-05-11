import React from 'react';

import styles from './Input.module.scss';

function Input(props) {
    return (
        <div className = {styles.input__box}>
            <label>{props.labelText}</label>
            <input type={props.type}
                   placeholder={props.placeholderText}
                   onChange = {props.onChange}
                   className = {styles.input__search}
                   name={props.name}
                   onBlur={props.onBlur}
                   value={props.value}/>
        </div>
    );
}
export default Input;
