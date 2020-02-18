import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from "react-router-dom";

import './styles.css';

// Classe que retorna a estrutura da página principal
export default class Main extends Component {

    // state(estado) é sempre um objeto.
    // Feito para armazenar as variáveis que queremos.
    // O método render pode depender dessas variáveis,
    // por isso que colocamos no objeto state. Veja no
    // exemplo de contagem das variáveis.
    state = {
        products: [],
        productInfo: {}, // Armazenar todas as informações do produto
        page: 1,
    };

    /**
     * Método executado assim que o componente for 
     * mostrado em tela.
     */
    componentDidMount() {
        this.loadProducts();
    }

    // Somente a arrow function pode enxergar o escopo
    // da variável 'this'
    loadProducts = async ( page = 1 ) => {
        // await pausa a Promisse para que ela seja resolvida
        const response = await api.get(`/products?page=${page}`); //passando nossa page como parâmetro

        const { docs, ...productInfo } = response.data;

        //console.log(response.data.docs);

        //preencher o array products de state
        this.setState({ products: docs, productInfo, page }); // armazenar a página atualizada também

    };
    prevPage = () => {
        const {page, productInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        // Buscar pag atual e o productInfo
        const { page, productInfo } = this.state;

        if( page === productInfo.pages ) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };


    render() {
        // return <h1> Contagem de produtos: {this.state.products.length} </h1>;

        const { products, page, productInfo } = this.state;        

        return (
            <div className="product-list">
                { 
                    // O react exige que coloquemos uma key para cada item do array
                    // quando utilizamos o map() do js. Dessa forma, key={p._id} deve
                    // ser adicionado para atribuir uma key para cada um. Isso evita
                    // o erro no console
                    products.map( p => (
                        <article key={p._id}>
                            <strong>{p.title}</strong>    
                            <p>{p.description}</p>

                            <Link to={`/products/${p._id}`}>Acessar</Link>
                        </article>
                    ))
                }

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}