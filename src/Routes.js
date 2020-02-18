import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main/index";
import Product from './pages/product/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/> 
            <Route exact path="/products/:id" component={Product}/> 
        </Switch>
    </BrowserRouter>
);

export default Routes;

/**
 * BrowserRouter = define que vamos utilizar as rotas através de um browser.
 * Switch = define que uma única rota vai ser chamada ao mesmo tempo.
 * Route = define as rotas a serem acessadas.
 * 
 * <Route exact path="/" component={Main}/>
 * No código acima, a página só vai acessar a rota se o caminho for exatamente(exact)
 * o main ("/"). 
 * 
 * <Route exact path="/products/:id" component={Main}/>
 * A expressão ":id" no path significa que o caminho vai receber como 
 * parâmetro o id do produto.
 * 
 */

