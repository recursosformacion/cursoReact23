import React, { Component } from 'react'

export default class MontaPoster extends Component {

    render() {

        const linea = this.props.linea
        return (
            
                <div  style={{width:"25%",
                              height:'500px',
                              float:"left",
                              marginRight:"20px",
                            marginBottom:"50px",
                            minWidth:'300px'
                        }}>

                    <img  style={{width:"100%"}} 
                        src={linea.img}
                        alt={linea.name}
                    />

                    <div className="card-body">

                        <p className="card-title"> {linea.name}</p>
                        <p className="card-text">{linea.birthday}</p>

                    </div>
                </div>
          
        )
    }
}