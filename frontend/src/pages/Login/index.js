import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';

import './styles.css';

const schema = Yup.object().shape({
    email: Yup.string()
      .email('Email invalid')
      .required('Email is a required field'),
    password: Yup.string()
      .min(4, 'Password must be at least 4 characters')
      .required('Password is a required field'),
});

export default function Login(props) {
    const [passError, setPassError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const handleSubmit = values => {
        setPassError(null);
        setEmailError(null);
        api.post('markets/authenticate', values)
            .then(resp => {
                console.log(resp);
                const { data } = resp;
                if (data.success) {
                    localStorage.setItem('app-token', data.token);
                    localStorage.setItem('user-id', data.id);
                    props.history.push('/');
                } else {
                    if(data.err.includes('Password')) {
                        setPassError(data.err);
                    }
                    else {
                        setEmailError(data.err);
                    }
                }
            });
    }

    return (
        <div className="main">
            <p className="sign" align="center">Sign in</p>
            <Form className="form1" schema={schema} onSubmit={handleSubmit}>
                <Input className="un" type="text" align="center" placeholder="Email" name="email"/>
                {emailError && <span>{emailError}</span>}
                <Input className="pass" type="password" align="center" placeholder="Password" name="password"/>
                {passError && <span>{passError}</span>}
                <button className="submit" type="submit" align="center">Sign in</button>
            </Form>
            <p className="account" align="center">Don’t have an account?</p>
            <Link to="/signup"><p className="signup" align="center">SIGN UP NOW</p></Link>
        </div>
    );
}