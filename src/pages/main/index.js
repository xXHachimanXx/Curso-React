import React, {Component} from 'react';
import api from '../../services/api';

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
    loadProducts = async () => {
        // await pausa a Promisse para que ela seja resolvida
        const response = await api.get(`/products`);

        //console.log(response.data.docs);

        //preencher o array products de state
        this.setState({ products: response.data.docs });

    };

    render() {
        // return <h1> Contagem de produtos: {this.state.products.length} </h1>;

        const { products } = this.state;

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

                            <a href="#">Acessar</a>
                        </article>
                    ))
                }
            </div>
        );
    }
}