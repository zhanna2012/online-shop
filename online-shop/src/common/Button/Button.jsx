import React from 'react';

import './Button.scss';

function Button(props) {
    return (
        <button onClick={props.onClick}
                className = "btn"
                onSubmit = {props.onSubmit}
                id={props.id}
        >
            {props.buttonText}
        </button>
    );
}
export default Button;
