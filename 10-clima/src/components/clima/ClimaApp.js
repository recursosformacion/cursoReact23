import { useState} from "react";



import FormularioClima from "./FormularioClima";
import InformeClima from "./InformeClima";

import { WEATHER_APIKEY } from "../../keyTemp";

let url;

function ClimaApp() {

  const [urlm, setUrl] = useState("");

  const getDatos = (e) => {
    e.preventDefault();
    console.log(e.target);
    const [city, country] = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    console.log("preguntando por ", cityValue);

    url = getCiudad(cityValue, countryValue);
    if (url !== urlm) {
      console.log(url,urlm)
      setUrl(url);
    }


  };

  const getCiudad = (cityValue, countryValue) => {
    const WEATHER_FUNCION = "weather";

    return encodeURI(
      `http://api.openweathermap.org/data/2.5/${WEATHER_FUNCION}?q=${cityValue},${countryValue}&APPID=${WEATHER_APIKEY}&units=metric`
    );
  };

  return (
    <div className="App">
      <FormularioClima origen={getDatos} />
      <InformeClima url={urlm}/>
    </div>
  );
}

export default ClimaApp;
