import React from 'react';

const Button = ({text, style}) => {
    return (
        <button
            style={style && style}
            className="waves-effect waves-light btn-small light-blue darken-1">{text}</button>
    );
};

export default Button;