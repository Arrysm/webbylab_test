import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper light-blue lighten-3">
                <div className="brand-logo" style={{marginLeft: 10, userSelect: 'none'}}>WebbyLab_Test</div>
                <ul className="right hide-on-med-and-down">
                <li><Button text={'Sign Out'} style={{marginRight: 10}}/></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;