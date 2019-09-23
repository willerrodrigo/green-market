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

export default class Modal extends Component {
    state = {
        name: '',
        price: '',
        weight: '',
        volume: '',
        category: '',
        disableEditBtn: true,
        disableDeleteBtn: false,
        loading: false,
    };

    componentDidUpdate(prevProps){
        if (this.props.value !== prevProps.value) {
            this.setState({
                name: this.props.value.name,
                price: this.props.value.price,
                weight: this.props.value.weight,
                volume: this.props.value.volume,
                category: this.props.value.category,
            });
        }
    }

    handleModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    handleSubmit = async (values) => {
        this.setState({ disableDeleteBtn: true, disableEditBtn: true });

        await api.put('products', {
            _id: this.props.value._id,
            update: values
        });

        this.setState({ disableDeleteBtn: false });
        this.handleModal();
        this.props.update();
    }

    handleDelete = async () => {
        this.setState({ disableDeleteBtn: true, disableEditBtn: true });

        await api.delete(`products/${this.props.value._id}`);

        this.setState({ disableDeleteBtn: false });
        this.handleModal();
        this.props.update();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, disableEditBtn: false });
    }

    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.handleModal}>&times;</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} schema={schema}>
                        <div className="modal-body">
                                <label>Name: </label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />

                                <label>Price: </label>
                                <Input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    onChange={this.handleChange}
                                    value={this.state.price}
                                />

                                <label>Weight: </label>
                                <Input
                                    type="text"
                                    name="weight"
                                    placeholder="Weight (Kg)"
                                    onChange={this.handleChange}
                                    value={this.state.weight}
                                />

                                <label>Volume: </label>
                                <Input
                                    type="text"
                                    name="volume"
                                    placeholder="Volume (L)"
                                    onChange={this.handleChange}
                                    value={this.state.volume}
                                />

                                <label>Category: </label>
                                <Input
                                    type="text"
                                    name="category"
                                    placeholder="Category"
                                    onChange={this.handleChange}
                                    value={this.state.category}
                                />
                        </div>
                        <div className="modal-footer">
                            <button id="editButton" type="submit" disabled={this.state.disableEditBtn}>Editar</button>
                            <button onClick={this.handleDelete} id="deleteButton" type="submit" disabled={this.state.disableDeleteBtn}>Excluir</button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}