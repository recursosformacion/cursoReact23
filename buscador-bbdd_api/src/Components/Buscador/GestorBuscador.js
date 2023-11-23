import React, { Component } from 'react';
import { Titulo } from './Titulo';
import FormBuscador from './FormBuscador';
import PresentaPelis from './PresentaPelis';

export default class GestorBuscador extends Component {

    state = { resultados: [], buscador: false, numero: 0 };


    _handleContenido = (resultados, numero) => {
        this.setState({ resultados, buscador: true, numero: numero });
    }
    _presentarBusqueda = () => {
        return this.state.resultados.length === 0
            ? <p> No hay coincidencias</p>
            : <PresentaPelis listaPelis={this.state.resultados} cantidad={this.state.numero} />
    }

    render() {

        return (
            <div>

                <Titulo>Buscador de peliculas</Titulo>
                <div className="buscador">
                    <FormBuscador entrega={this._handleContenido} />
                </div>
                {this.state.buscador
                    ? this._presentarBusqueda()
                    : <p> Indique la pelicula a buscar</p>
                }


            </div>
        )
    }


}