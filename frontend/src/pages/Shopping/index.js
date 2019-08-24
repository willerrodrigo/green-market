import React from 'react';
import './styles.css';

import bag from '../../assets/bagFinal.svg';

export default function Shopping() {
    function bagCalculate(peso) {
        let bags = [];
        peso = 1000;
        let pesoMax = 2000;
        if(bags.size() === 0) {
            bags.add(0);
        }
        for(let i = 0; i < bags.size(); i++){
            if( (bags[i] += peso) <= pesoMax ) {
                bags[i] += peso;
            }else {
                bags.add(peso);
            }
        }

    }


    return (
        <div className="shopping-container">
            <form>
                <input placeholder="Product" />
                <button type="submit">Add</button>
            </form>

            <div className="baglog-container">
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
                        
                    </ul>
                    <div className="teste">
                        <footer><strong>Total: 0</strong></footer>
                    </div>
                </div>
                <div className="log-container">
                    <p>Produtos adicionados</p>
                    <ul>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 1</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 2</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 3</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 4</p><p>preço</p>
                        </li>
                        <li>
                            <p>produto 5</p><p>preço</p>
                        </li>
                    </ul>
                    <footer><strong>Total: R$0.00</strong></footer>
                </div>
            </div>
        </div>
    );
}