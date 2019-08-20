import React from 'react';
import './styles.css';

import bag from '../../assets/bagFinal.svg';

export default function Shopping() {
    return (
        <div className="shopping-container">
            <form>
                <input placeholder="Product" />
                <button type="submit">Add</button>
            </form>
            <div className="bag-container">
                <ul>
                    <li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li>
                    <li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li><li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li><li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li><li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li><li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li><li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li><li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li>
                    <li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li>
                    <li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li>
                    <li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li>
                    <li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li>
                    <li>    
                        <img src={bag} alt="Sacola" height="68" />
                        <footer><strong>100%</strong></footer>
                    </li>
                </ul>
            </div>
        </div>
    );
}