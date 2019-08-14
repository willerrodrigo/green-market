import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//importar as pages
import Shopping from './pages/Shopping';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Shopping} />
        </BrowserRouter>
    );
}