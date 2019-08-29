import React from 'react';

import Home from './pages/Home';
import Shopping from './pages/Shopping/index.js';
import Products from './pages/Products'; 
import Register from './pages/Register';
import Modal from './components/Modal';
import Header from './components/Header';

import PrivateRoute from './components/PrivateRouter';

export default function Routes() {
    return (
        <>
            <Header />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/shopping" component={Shopping} />
            <PrivateRoute exact path="/products" component={Products} />
            <PrivateRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/modal/:id" component={Modal} />
        </>
    );
}