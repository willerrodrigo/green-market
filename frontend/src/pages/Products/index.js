import React from 'react';
import './styles.css';

import ListItem from '../../components/ListItem';

export default function Products() {
    const products = [
        {
            id: '1',
            name: 'Arroz'
        },
        {
            id: '2',
            name: 'Feijão'
        },
        {
            id: '3',
            name: 'Leite'
        },
        {
            id: '4',
            name: 'Macarrão'
        },
        {
            id: '5',
            name: 'Macarrão'
        },
        {
            id: '6',
            name: 'Macarrão'
        },
        {
            id: '7',
            name: 'Macarrão'
        },
        {
            id: '8',
            name: 'Macarrão'
        },
        {
            id: '9',
            name: 'Macarrão'
        },
        {
            id: '10',
            name: 'Macarrão'
        },
        {
            id: '11',
            name: 'Macarrão'
        },
        {
            id: '12',
            name: 'Macarrão'
        },
        {
            id: '13',
            name: 'Macarrão'
        },
    ];

    return (
        <div className="container">
            <ul>
                {products.map((product) =>
                    <ListItem key={product.id.toString()}
                                value={product} />
                )}
            </ul>
        </div>
    );
}