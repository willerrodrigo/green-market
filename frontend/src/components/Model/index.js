import React, { Component } from 'react';
import './styles.css';

class Modal extends Component {

    componentDidMount(){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        console.log('ComponentDidMount')
    }

    handleModal= () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        this.props.history.push('/products');
    }

    render(){
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleModal}>&times;</span>
                    <p>Teste</p>
                </div>
            </div>
        );
    }
}

export default Modal;