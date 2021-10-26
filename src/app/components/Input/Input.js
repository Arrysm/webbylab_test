import React from 'react';
import './Input.css'

const Input = (props) => {
    const {id, type, label, onChange, onBlur, innerRef, textArea, error, required} = props;

    if (textArea) {
        return (
            <div className="input-field">
                <textarea
                    id={id}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur && onBlur}
                    ref={innerRef && innerRef}
                />
                {error && <p className={'input-error'}>{error}</p>}
                <label htmlFor={id}>{label}</label>
            </div>
        )
    }

    return (
        <div className="input-field">
            <input
                id={id}
                type={type}
                onChange={onChange}
                onBlur={onBlur && onBlur}
                ref={innerRef && innerRef}
                required={required && required}
            />
            {error && <p className={'input-error'}>{error}</p>}
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default Input;