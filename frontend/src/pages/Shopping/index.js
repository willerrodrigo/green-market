import React from 'react';
import './styles.css';

import bag from '../../assets/Bag 2.svg';

export default function Shopping() {
    return (
        <div className="shopping-container">
            <form>
                <input placeholder="Produto" />
                <button type="submit">Add</button>
            </form>
            <div className="bag-container">
                <img src={bag} alt="Sacola" height="68" />
                <img src={bag} alt="Sacola" height="68" />
            </div>
        </div>
    );
}