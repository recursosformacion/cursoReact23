import React, { Component } from 'react';
import { Titulo } from './Titulo';
import AccesoAPI from '../../Servicios/AccesoAPI';
import PresentaPersonajes from './PresentaPersonajes';

export default class GestorBuscador extends Component {

    constructor(){
        super();
        this.state={
            lista:[],
        }
        AccesoAPI.leerPersonajes()
        .then(respuesta=>{
            this.setState({
                lista:respuesta,
            })
        })   
        
        
    }
    
    render() {
        let lista = this.state.lista;
        return (
            <div className="container">
                <Titulo>Buscador</Titulo>
                {lista?            
                    <PresentaPersonajes listaChar={lista} />
                    :""}
            </div>
        )
    }


}