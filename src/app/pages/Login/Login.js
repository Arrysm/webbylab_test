import React from 'react';
import Loader from "../../components/Loader/Loader";
import {useSelector} from "react-redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";

const Login = () => {
    const isLoading = useSelector(store => store.isLoading);

    if (isLoading) return <Loader />

    return (
        <div className={'form__wrapper'}>
            <form onSubmit={(e) => e.preventDefault()}>
                <Input id={'email'} type={'text'} label={'Email'}/>
                <Input id={'password'} type={'password'} label={'Password'}/>
                <Button text={'Sign In'}/>
                <p style={{fontSize: 12}}>Don't have an account? <Link to={'/registration'}>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;