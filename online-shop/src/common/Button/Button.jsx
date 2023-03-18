import React from 'react';

import './Button.scss';

function Button(props) {
    return (
        <button onClick={props.onClick}
                className = "btn"
                onSubmit = {props.onSubmit}
                id={props.id}
                type={props.type ? props.type : 'submit'}
                disabled={props.disabled}
        >
            {props.buttonText}
        </button>
    );
}
export default Button;
