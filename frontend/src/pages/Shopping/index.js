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
let countperc = 1;
let totalPagar = 0;


export default function Shopping() {
    const [products, setProducts] = useState([{}]);
    const [mensagemErro, setMensagemErro] = useState();

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

        console.log(bags);
    }

    const handleBag = async (values) => {

        var response = await api.get(`products/${values.codigoBarra}`);

        let state = {
            ...response.data
        }
        itens.push(state);
        totalPagar += state.price;

        bagCalculate();
        setProducts(response.data);

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
            console.log(bags);
            porcentual = [];
            totalPagar = 0;
            setMensagemErro('');

        }
        else {
            setMensagemErro('Nenhum produto adicionado.');
        }

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
                    <p>Added Products</p>
                    <ul>
                        {itens.map((product, index) =>
                        <li key={index}>
                            <p>{product.name}</p><p>{product.price}</p>
                        </li>
                        )}
                    </ul>
                    <footer><strong>Total: R${totalPagar.toFixed(2)}</strong></footer>

                        <button type="submit" onClick={handleShopping}>Finalizar Compra</button>
                        <p className="err">{mensagemErro}</p>
                </div>
            </div>
        </div>
    );
}