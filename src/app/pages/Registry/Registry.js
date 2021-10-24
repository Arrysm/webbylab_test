import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {Link, useHistory} from "react-router-dom";
import React, {useRef, useState} from "react";
import axios from "axios";

const Registry = () => {

    const pass = useRef(null);
    const confirmPassword = useRef(null);
    const history = useHistory();

    const [value, setValue] = useState({
        password: '', confirmPassword: '', name: '', email: ''
    });

    const changeHandler = (event) => setValue({...value, [event.target.id]: event.target.value});

    const validatePassword = (event) => {
        if (value.password !== '' && value.confirmPassword !== '' && value.password !== value.confirmPassword) {
            window.M.toast({html: 'Passwords aren\'t same', classes: 'light-blue lighten-1'});
            pass.current.value = '';
            value.password = '';
            confirmPassword.current.value = '';
            value.confirmPassword = '';
        }
    }

    const submitRegistration = async () => {
        axios.post('/users', value, {headers: {'content-type': 'application/json'}})
            .then(resp => {
                const {status, error} = resp.data;
                if (status) {
                    history.push('/login');
                    window.M.toast({html: 'Congratulations!', classes: 'light-blue lighten-1'});
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
                submitRegistration();
            }}>
                <Input
                    id={'name'}
                    type={'text'}
                    label={'Name'}
                    onChange={(e) => changeHandler(e)}
                />
                <Input
                    id={'email'}
                    type={'text'}
                    label={'Email'}
                    onChange={(e) => changeHandler(e)}
                />
                <Input
                    innerRef={pass}
                    id={'password'}
                    type={'password'}
                    label={'Password'}
                    onChange={(e) => changeHandler(e)}
                />
                <Input
                    innerRef={confirmPassword}
                    id={'confirmPassword'}
                    type={'password'}
                    label={'Confirm Password'}
                    onChange={(e) => changeHandler(e)}
                    onBlur={(e) => validatePassword(e)}
                />
                <Button text={'Sign Up'} />
                <p style={{fontSize: 12}}>Already have an account? Go back to <Link to={'/login'}>Sign In</Link></p>
            </form>
        </div>
    );
};

export default Registry;