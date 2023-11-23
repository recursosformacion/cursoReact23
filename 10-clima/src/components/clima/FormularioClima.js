import React from 'react'

function FormularioClima(props) {
  return (
    <div>
        <h1> El formulario</h1>
        <form onSubmit={props.origen}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre de la ciudad" name="city" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre del pais" name="country" />
            </div>
            <button type="submit" classname="btn btn-primary">Enviar</button>
        </form>

    </div>
  )
}

export default FormularioClima