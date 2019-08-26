import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

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

    handleSubmit = async (e) => {
        this.setState({ disableDeleteBtn: true, disableEditBtn: true });

        if(e.target.id === 'editButton'){
             await api.put('products', {
                _id: this.props.value._id,
                update: {
                    'name': this.state.name,
                    'price': this.state.price,
                    'weight': this.state.weight,
                    'volume': this.state.volume,
                    'category': this.state.category,
                }
            });

            this.setState({ disableDeleteBtn: false });
        }
        else {
            await api.delete(`products/${this.props.value._id}`);
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
            this.props.update();
        }
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
                    <div className="modal-body">
                        <form>
                            <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />

                            <label>Price: </label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                onChange={this.handleChange}
                                value={this.state.price}
                            />

                            <label>Weight: </label>
                            <input
                                type="text"
                                name="weight"
                                placeholder="Weight (Kg)"
                                onChange={this.handleChange}
                                value={this.state.weight}
                            />

                            <label>Volume: </label>
                            <input
                                type="text"
                                name="volume"
                                placeholder="Volume (L)"
                                onChange={this.handleChange}
                                value={this.state.volume}
                            />

                            <label>Category: </label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                onChange={this.handleChange}
                                value={this.state.category}
                            />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button  onClick={this.handleSubmit} id="editButton" type="submit" disabled={this.state.disableEditBtn}>Editar</button>
                        <button  onClick={this.handleSubmit} id="deleteButton" type="submit" disabled={this.state.disableDeleteBtn}>Excluir</button>
                    </div>
                </div>
            </div>
        );
    }
}