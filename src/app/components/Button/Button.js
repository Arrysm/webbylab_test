import React from 'react';

const Button = ({text, style, className, onClick}) => {
    return (
        <button
            style={style && style}
            className={className ? `waves-effect waves-light btn-small light-blue darken-1 ${className}`
                : "waves-effect waves-light btn-small light-blue darken-1"}
            onClick={onClick && onClick}
        >{text}</button>
    );
};

export default Button;