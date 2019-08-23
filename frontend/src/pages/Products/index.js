import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';

export default function Products() {
    const [style, setStyle] = useState({});
    const [modalProduct, setModalProduct] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        var config = { headers: {'market': '5d532e0887aded0960431e7e'} };

        async function fetchData() {
            var products = await api.get('products', config);
            console.log(products);
            setProducts(products.data);
        }

        fetchData();
    }, []);

    const handleModal = async (display, id) => {        
        if(id){
            var product = await api.get(`products/${id}`);
            console.log(product);
            setModalProduct(product.data);
        }

        setStyle({ display })
    }

    return (
        <div className="container">
            <div id="myModal" className="modal" style={style}>
                <div className="modal-content">
                    <span className="close" onClick={() => handleModal("none", undefined)}>&times;</span>
                    <p>{modalProduct.name}</p>
                </div>
            </div>
            <ul>
                {products.map((product) =>
                    <li key={product._id.toString()} onClick={() => handleModal("block", product._id)}>
                        <p>{product.name}</p>
                    </li>
                )}
            </ul>
        </div>
    );
}