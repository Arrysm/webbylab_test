import React from 'react';
import './Input.css'

const Input = (props) => {
    const {id, type, label, onChange, onBlur, innerRef} = props;

    return (
        <div className="input-field">
            <input
                id={id}
                type={type}
                onChange={onChange}
                onBlur={onBlur && onBlur}
                ref={innerRef && innerRef}
            />
                <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Input;