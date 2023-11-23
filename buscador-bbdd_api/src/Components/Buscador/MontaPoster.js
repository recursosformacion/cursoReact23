import React, { Component } from 'react'

export default class MontaPoster extends Component {

    render() {

        const linea = this.props.linea
        return (
            <div>
                <div className="card-image">
                    <img
                        src={linea.Poster}
                        alt={linea.Title}
                    />
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4"> {linea.Title}</p>
                        <p className="subtitle is-6">{linea.Year}</p>
                    </div>
                </div>
            </div>
        )
    }
}