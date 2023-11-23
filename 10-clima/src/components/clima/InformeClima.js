import React, { useState, useEffect } from "react";
import accesoApi from "./accesoApi";

const InformacionClima = (props) => {
  let urlIcono;

  console.log(props);
  const url = props.url;

  const [tiempo, setTiempo] = useState({});
  useEffect(() => {
    accesoApi(url).then((respuesta) => {
      setTiempo(respuesta);
    });
  }, [url]);

  if (tiempo == null) {
    return <h1>Esperando</h1>;
  }
  urlIcono = "http://openweathermap.org/img/w/" + tiempo.icon + ".png";
  return (
    <>
      <h1>Informe del tiempo</h1>
      <div>
        {tiempo.temperatura ? (
          <div className="card card-body">
            <p>
              {" "}
              Ubicacion:{tiempo.ciudad},{tiempo.estado}
            </p>
            <p> Humedad: {tiempo.humedad}%</p>
            <p>
              {" "}
              Temperatura: {tiempo.temperatura}&deg;C, {tiempo.descripcion}
            </p>
            <p> Viento: {tiempo.viento}</p>
            <p>
              <img id="wicon" src={urlIcono} alt="Weather icon" />
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default InformacionClima;
