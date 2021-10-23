import {useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import React, {useRef, useState} from "react";

const Registry = () => {
    const isLoading = useSelector(store => store.isLoading);

    const pass = useRef(null);
    const confirm = useRef(null);

    const [value, setValue] = useState({
        password: '', confirm: ''
    });

    const changeHandler = (event) => setValue({...value, [event.target.id]: event.target.value})

    const validatePassword = (event) => {
        if (value.password !== '' && value.confirm !== '' && value.password !== value.confirm) {
            window.M.toast({html: 'Passwords aren\'t same', classes: 'light-blue lighten-1'});
            pass.current.value = '';
            value.password = '';
            confirm.current.value = '';
            value.confirm = '';
        }
    }

    if (isLoading) return <Loader />

    return (
        <div className={'form__wrapper'}>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e);
            }}>
                <Input id={'name'} type={'text'} label={'Name'}/>
                <Input id={'email'} type={'text'} label={'Email'}/>
                <Input
                    innerRef={pass}
                    id={'password'}
                    type={'password'}
                    label={'Password'}
                    onChange={(e) => changeHandler(e)}
                />
                <Input
                    innerRef={confirm}
                    id={'confirm'}
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