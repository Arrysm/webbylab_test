import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setToken} from "../../store/actions/tokenActions";

const Login = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        email: '', password: ''
    });

    const changeHandler = (event) => setValue({...value, [event.target.id]: event.target.value});

    const submitLogin = async () => {
        axios.post('/sessions', value, {headers: {'content-type': 'application/json'}})
            .then(resp => {
                const {status, error, token} = resp.data;
                if (status) {
                    sessionStorage.setItem('webbyUser', token);
                    dispatch(setToken(token));
                    window.M.toast({html: 'Welcome!', classes: 'light-blue lighten-1'});
                } else {
                    throw new Error(error.code);
                }
            })
            .catch(e => window.M.toast({html: e, classes: 'light-blue lighten-1'}))
    }

    return (
        <div className={'form__wrapper'}>
            <form onSubmit={(e) => {
                e.preventDefault();
                submitLogin();
            }}>
                <Input
                    id={'email'}
                    type={'text'}
                    label={'Email'}
                    onChange={(e) => changeHandler(e)}
                />
                <Input
                    id={'password'}
                    type={'password'}
                    label={'Password'}
                    onChange={(e) => changeHandler(e)}
                />
                <Button text={'Sign In'}/>
                <p style={{fontSize: 12}}>Don't have an account? <Link to={'/registration'}>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;