import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';
import './styles.css';

import bag from '../../assets/bagFinal.svg';

let itens = [];
let bags = [];
let percentage = [];
let totalPay = 0;


export default function Shopping() {
    const [products, setProducts] = useState([{}]);
    const [errorMessageShopping, setErrorMessageShopping] = useState();
    const [errorMessageCode, setErrorMessageCode] = useState();

    function bagCalculate() {
        let maxWeight = 10;
        let weight = (itens[itens.length - 1].weight);
        let auxPercentage = '0.00';

        if(bags.length === 0) {
            bags.push(0.0);
            percentage.push(auxPercentage);

        }
        for(let i = 0; i < bags.length; i++){
            
            if( (bags[i] + weight) <= maxWeight ) {
                bags[i] += weight;
                auxPercentage = ((bags[i] / maxWeight) * 100).toFixed(2);

                percentage[i] = auxPercentage;

                break;
            } else if ( bags[i] === bags[bags.length - 1] ) {

                bags.push(weight);
                auxPercentage = ((bags[bags.length - 1] / maxWeight) * 100).toFixed(2);

                percentage.push( auxPercentage );

                break;
            }

        }
    }

    const handleBag = async (values) => {
        if(!values.barCode){
            setErrorMessageCode('Barcode must be entered');
        }
        else if(values.barCode.length != 24){
            setErrorMessageCode('Invalid barcode');
        }
        else{

            var response = await api.get(`products/${values.barCode}`);
            if(!response.data) {
                setErrorMessageCode('Invalid barcode');
            }
            else if(response.data.message){
                setErrorMessageCode('Invalid barcode');
            }
            else{
                let state = {
                    ...response.data
                }
                itens.push(state);
                totalPay += state.price;

                bagCalculate();
                setProducts(response.data);
                setErrorMessageCode('');
            }
        }
    }

    const handleShopping = async () => {
        let totalWeight = 0;

        if(itens.length > 0){

            for(let k = 0; k < itens.length; k++){
                totalWeight += itens[k].weight;
            }

            const data = {
                totalPrice: totalPay,
                totalWeight: totalWeight,
                bags: bags.length,
                'market': localStorage.getItem('user-id')
            }

            await api.post('shopping', data).catch(err => console.log(err));

            bags = [];
            itens = [];
            percentage = [];
            totalPay = 0;
            setErrorMessageShopping('');

        }
        else {
            setErrorMessageShopping('No products added.');
        }

    }

    return (
        <div className="shopping-container">
            <Form onSubmit= {handleBag} >
                <Input name="barCode" placeholder="Product" />
                <button type="submit" >Add</button>
            </Form>
            <p className="errCode">{errorMessageCode}</p>

            <div className="baglog-container">
                <div className="bag-container">
                    <ul>
                        {percentage.map((product, index) =>
                            <li key={index}>
                                <img src={bag} alt="Bag" height="68" />
                                <footer><strong>{product}%</strong></footer>
                            </li>
                        )}
                    </ul>
                    <div className="bagFooter">
                        <footer><strong>Total: {percentage.length}</strong></footer>
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
                    <footer><strong>Total: R${totalPay.toFixed(2)}</strong></footer>

                        <button type="submit" onClick={handleShopping}>Check out</button>
                        <p className="errShopping">{errorMessageShopping}</p>
                </div>
            </div>
        </div>
    );
}