import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

class Register extends Component {
    state = {
      name: '',
      price: '',
      weight: '',
      volume: '',
      category: '',
      loading: false,
    };

    handleSubmit = async (e) => {
      e.preventDefault();
      
      this.setState({
        loading: true
      });

      const data = {
          'market': '5d532e0887aded0960431e7e', // TODO: Get Logged Market ID
          'name': this.state.name,
          'price': Number(this.state.price),
          'weight': Number(this.state.weight),
          'volume': Number(this.state.volume),
          'category': this.state.category
      }

      await api.post('products', data);

      this.setState({
        name: '',
        price: '',
        weight: '',
        volume: '',
        category: '',
        loading: false
      });
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      return (
        <form id="new-product" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            onChange={this.handleChange}
            value={this.state.price}
          />

          <input
            type="text"
            name="weight"
            placeholder="Weight"
            onChange={this.handleChange}
            value={this.state.weight}
          />

          <input
            type="text"
            name="volume"
            placeholder="Volume"
            onChange={this.handleChange}
            value={this.state.volume}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={this.handleChange}
            value={this.state.category}
          />

          <button type="submit" disabled={this.state.loading}>Register</button>
        </form>
      );
    }
}

export default Register;