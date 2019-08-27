import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';

import './styles.css';

const schema = Yup.object().shape({
    email: Yup.string()
      .email('Email invalid')
      .required('Email is a required field'),
    password: Yup.string()
      .min(4)
      .required('Password is a required field'),
});

export default function Login(props) {

    const handleSubmit = values => {
        console.log(values);
/*         api.post('auth', values)
            .then(resp => {
                const { data } = resp;
                if (data) {
                    localStorage.setItem('app-token', data);
                    props.history.push('/');
                }
            }); */
    }

    return (
        <div className="main">
            <p className="sign" align="center">Sign in</p>
            <Form className="form1" schema={schema} onSubmit={handleSubmit}>
                <Input className="un" type="text" align="center" placeholder="Username" name="email"/>
                <Input className="pass" type="password" align="center" placeholder="Password" name="password"/>
                <button className="submit" type="submit" align="center">Sign in</button>
            </Form>
            <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
        </div>
    );
}