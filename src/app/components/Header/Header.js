import React from 'react';
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {clearToken} from "../../store/actions/tokenActions";

const Header = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        sessionStorage.clear();
        dispatch(clearToken());
    }

    return (
        <nav>
            <div className="nav-wrapper light-blue lighten-3">
                <div className="brand-logo" style={{marginLeft: 10, userSelect: 'none'}}>WebbyLab_Test</div>
                <ul className="right hide-on-med-and-down">
                <li><Button
                    text={'Sign Out'}
                    style={{marginRight: 10}}
                    onClick={signOut}
                /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;