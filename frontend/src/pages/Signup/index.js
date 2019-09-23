import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';

import './styles.css';

const schema = Yup.object().shape({
    name: Yup.string()
        .required('Name is a required field'),
    phone: Yup.string(),
    email: Yup.string()
      .email('Email invalid')
      .required('Email is a required field'),
    password: Yup.string()
      .min(4, 'Password must be at least 4 characters')
      .required('Password is a required field'),
});

export default function SignUp() {
    const [emailError, setEmailError] = useState(null);

    const handleSubmit = async (values, { resetForm }) => {
        setEmailError(null);
        await api.post('markets/signup', values)
            .then(resp => {
                console.log(resp);
                const { data } = resp;
                if(data.code === 11000) {
                    setEmailError('Email already exist');
                } else {
                    resetForm();
                }
            });
    }

    return (
        <div className="main">
            <p className="signupText" align="center">Sign up</p>
            <Form className="form" schema={schema} onSubmit={handleSubmit}>
                <Input className="input" type="text" align="center" placeholder="Name" name="name"/>
                <Input className="input" type="text" align="center" placeholder="Phone" name="phone"/>
                <Input className="input" type="text" align="center" placeholder="Email" name="email"/>
                {emailError && <span>{emailError}</span>}
                <Input className="input" type="password" align="center" placeholder="Password" name="password"/>
                <button className="submit" type="submit" align="center">Sign up</button>
                <Link to="/login"><p className="signBack" align="center">Sign in</p></Link>
            </Form>
        </div>
    );
}