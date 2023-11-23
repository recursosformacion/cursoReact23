import React, { Component } from 'react';
import MontaPoster from './MontaPoster';


export default class PresentaPersonajes extends Component {



    render() {

        const lista = this.props.listaChar;
        console.log("en presenta", lista);
        return (
            <div >
                <h1 style={{ width: "100%" }}>Se han encontrado {lista && lista.length} películas</h1>
                <div className="">
                    {lista.map(personaje => (
                        <div key={personaje.char_id} >
                            <MontaPoster linea={personaje} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}