import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader__wrapper">
            <div className="progress">
                <div className="indeterminate light-blue darken-2"/>
            </div>
        </div>
    );
};

export default Loader;