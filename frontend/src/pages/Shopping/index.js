import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';
import './styles.css';

import bag from '../../assets/bagFinal.svg';

let itens = [];
let bags = [];
let porcentual = [];
let countperc = 1;
let totalPagar = 0;


export default function Shopping() {
    const [products, setProducts] = useState([{}]);
    const [errorMessageShopping, setErrorMessageShopping] = useState();
    const [errorMessageCode, setErrorMessageCode] = useState();

    function bagCalculate() {
        let maxWeight = 10;
        let weight = (itens[itens.length - 1].weight);

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

            if( (bags[i] + weight) <= maxWeight ) {
                bags[i] += weight;
                statePerc.percentual = ((bags[i] / maxWeight) * 100).toFixed(2);
                statePerc.count = countperc;
                porcentual[i] = statePerc;

                break;
            } else if ( bags[i] === bags[bags.length - 1] ) {

                bags.push(weight);
                countperc++;
                statePerc.count = countperc;
                statePerc.percentual = ((bags[bags.length - 1] / maxWeight) * 100).toFixed(2);

                porcentual.push( statePerc );

                break;
            }

        }
    }

    const handleBag = async (values) => {
        if(!values.codigoBarra){
            setErrorMessageCode('Código de barras deve ser inserido.');
        }
        else if(values.codigoBarra.length != 24){
            setErrorMessageCode('Tamanho insuficiente');
        }
        else{

            var response = await api.get(`products/${values.codigoBarra}`);
            if(!response.data) {
                setErrorMessageCode('Código de barras inválido');
            }
            else if(response.data.message){
                setErrorMessageCode('Código de barras inválido');
            }
            else{
                let state = {
                    ...response.data
                }
                itens.push(state);
                totalPagar += state.price;

                bagCalculate();
                setProducts(response.data);
                setErrorMessageCode('');
            }
        }
    }

    const handleShopping = async () => {
        let pesoTotal = 0;

        if(itens.length > 0){

            for(let k = 0; k < itens.length; k++){
                pesoTotal += itens[k].weight;
            }

            const data = {
                totalPrice: totalPagar,
                totalWeight: pesoTotal,
                bags: bags.length,
                'market': localStorage.getItem('user-id')
            }

            await api.post('shopping', data).catch(err => console.log(err));

            bags = [];
            itens = [];
            porcentual = [];
            totalPagar = 0;
            setErrorMessageShopping('');

        }
        else {
            setErrorMessageShopping('Nenhum produto adicionado.');
            console.log('chegou');
        }

    }

    return (
        <div className="shopping-container">
            <Form onSubmit= {handleBag} >
                <Input name="codigoBarra" placeholder="Product" />
                <button type="submit" >Add</button>
            </Form>
            <p className="errCode">{errorMessageCode}</p>

            <div className="baglog-container">
                <div className="bag-container">
                    <ul>
                        {porcentual.map((product, index) =>
                            <li key={index}>
                                <img src={bag} alt="Sacola" height="68" />
                                <footer><strong>{product.percentual}%</strong></footer>
                            </li>
                        )}
                    </ul>
                    <div className="teste">
                        <footer><strong>Total: {porcentual.length}</strong></footer>
                    </div>
                </div>
                <div className="log-container">
                    <p className="title">Added Products</p>
                    <ul>
                        {itens.map((product, index) =>
                        <li key={index}>
                            <p>{product.name}</p><p>{product.price}</p>
                        </li>
                        )}
                    </ul>
                    <footer><strong>Total: R${totalPagar.toFixed(2)}</strong></footer>

                        <button type="submit" onClick={handleShopping}>Finalizar Compra</button>
                        <p className="errShopping">{errorMessageShopping}</p>
                </div>
            </div>
        </div>
    );
}