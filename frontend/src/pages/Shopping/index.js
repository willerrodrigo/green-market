import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';
import './styles.css';

import bag from '../../assets/bagFinal.svg';

const schema = Yup.object().shape({
    codigoBarra: Yup.string()
      .required('Code is a required field'),
});

let itens = [];
let bags = [];
let porcentual = [];
let count = 1;
let countperc = 1;
let totalPagar = 0;

export default function Shopping() {
    const [products, setProducts] = useState([{}]);

    function bagCalculate() {
        let pesoMax = 10;
        let peso = (itens[itens.length - 1].weight);

        let statePerc = {
            percentual: String,
            count: Number,
        };
        
        if(bags.length === 0) {
            bags.push(0.0);
            statePerc.count = countperc;
            statePerc.percentual = '0.00';
            porcentual.push(statePerc);
            
        }
        for(let i = 0; i < bags.length; i++){
        
            if( (bags[i] + peso) <= pesoMax ) {
                bags[i] += peso;
                statePerc.percentual = ((bags[i] / pesoMax) * 100).toFixed(2);
                statePerc.count = countperc;
                porcentual[i] = statePerc;
                
                break;
            } else if ( bags[i] === bags[bags.length - 1] ) {
                
                bags.push(peso);
                countperc++;
                statePerc.count = countperc;
                statePerc.percentual = ((bags[bags.length - 1] / pesoMax) * 100).toFixed(2);
                
                
                porcentual.push( statePerc );

                break;
            }
            
        }
        

    }

    const handleBag = async (values) => {
        
        var response = await api.get(`products/${values.codigoBarra}`);
        
        count ++;
        let state = {category: response.data.category,
            createdAt: response.data.createdAt,
            market: response.data.market,
            name: response.data.name,
            price: response.data.price,
            updatedAt: response.data.updatedAt,
            volume: response.data.volume,
            weight: response.data.weight,
            __v: response.data.__v,
            _id: response.data._id,
            count:count,
        } 
        itens.push(state);
        totalPagar += state.price;
            
        bagCalculate();
        setProducts([response.data]);     
    } 

    return (
        <div className="shopping-container">
            <Form onSubmit= {handleBag} schema={schema}>
                <Input name="codigoBarra" placeholder="Product" />
                <button type="submit" >Add</button>
            </Form>

            <div className="baglog-container">
                <div className="bag-container">
                    <ul>
                        {porcentual.map((product =>
                            <li key={product.count}>   
                                <img src={bag} alt="Sacola" height="68" />
                                <footer><strong>{product.percentual}%</strong></footer>
                            </li>
                        ))}
                    </ul>
                    <div className="teste">
                        <footer><strong>Total: {porcentual.length}</strong></footer>
                    </div>
                </div>
                <div className="log-container">
                    <p>Added Products</p>
                    <ul>
                        {itens.map((product =>
                        <li key={product.count}>
                            <p>{product.name}</p><p>{product.price}</p>
                        </li>
                        ))}
                    </ul>
                    <footer><strong>Total: R${totalPagar.toFixed(2)}</strong></footer>
                </div>
            </div>
        </div>
    );
}