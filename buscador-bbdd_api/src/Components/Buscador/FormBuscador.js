import React, { Component } from 'react'

const API_KEY = '121adf75';
let API_PELI = `http://www.omdbapi.com/?&apikey=${API_KEY}`;

export default class FormBuscador extends Component {
    state = {
        inputMovie: ''
    }


    _handleSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;
        const ruta = API_PELI + `&s=${inputMovie}`
        console.log(ruta);
        fetch(ruta)
            .then(res => res.json())
            .then(
                (results) => {
                    console.log(results);
                    const { Response = "", Search = [], totalResults } = results;
                    
                    
                    
                    if (Response !== "False") {
                       this.props.entrega(Search, totalResults);
                       console.log(Search);
                    }
                }
            )
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Titulo de la pelicula"
                            onChange={this._handleChange} />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                    </button>
                    </div>
                </div>
            </form>
        )

    }

}