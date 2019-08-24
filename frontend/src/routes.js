import React from 'react';
import { Switch, Route } from 'react-router-dom';

//importar as pages
import Home from './pages/Home';
import Shopping from './pages/Shopping/index.js';
import Products from './pages/Products'; 
import Register from './pages/Register';
import Modal from './components/Modal';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shopping" component={Shopping} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/modal/:id" component={Modal} />
        </Switch>
    );
}