import React, { Component } from 'react';
import MontaPoster from './MontaPoster';


export default class PresentaPelis extends Component {



    render() {

        const lista = this.props.listaPelis;
        const cantidad = this.props.cantidad;
        return (
            <div className='posterLista'>
                <h1 style={{ width: "100%" }}>Se han encontrado {cantidad} películas</h1>

                {lista.map(pelicula => (
                    <div key={pelicula.imdbID} className='posterLista-item'>
                        <MontaPoster linea={pelicula} />
                    </div>
                ))}
            </div>
        )
    }
}