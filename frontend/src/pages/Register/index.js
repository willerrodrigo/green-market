import React, { Component } from 'react';
import api from '../../services/api';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import './styles.css';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is a required field'),
  price: Yup.number()
    .required('Price is a required field')
    .typeError('You must specify a number'),
  weight: Yup.number()
    .required('Weight is a required field')
    .typeError('You must specify a number'),
  volume: Yup.number()
    .required('Volume is a required field')
    .typeError('You must specify a number'),
  category: Yup.string()
    .required('Category is a required field')
});

class Register extends Component {
    state = {
      loading: false,
    };

    handleSubmit = async (values, { resetForm }) => {

      this.setState({
        loading: true
      });

      const data = {
          ...values,
          'market': localStorage.getItem('user-id')
      }

      await api.post('products', data).catch(err => console.log(err));

      resetForm();

      this.setState({
        loading: false
      });
    }

    render() {
      return (
        <Form id="new-product" schema={schema} onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
          />

          <Input
            type="text"
            name="price"
            placeholder="Price"
          />

          <Input
            type="text"
            name="weight"
            placeholder="Weight (Kg)"
          />

          <Input
            type="text"
            name="volume"
            placeholder="Volume (L)"
          />

          <Input
            type="text"
            name="category"
            placeholder="Category"
          />

          <button type="submit" disabled={this.state.loading}>Register</button>
        </Form>
      );
    }
}

export default Register;