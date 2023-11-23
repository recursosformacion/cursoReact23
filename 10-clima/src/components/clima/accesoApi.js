export default async function accesoApi(url) {
    let tiempo = {
      temperatura: "",
      descripcion: "",
      humedad: "",
      viento: "",
      ciudad: "",
      estado: "",
      icon: "",
      error: null,
    };
  
    if (url) {
      await fetch(url)
        .then((response) => response.json())
        // .then((respuesta) => console.log(respuesta))
        .then((respuesta) => {
          tiempo = {
            temperatura: respuesta.main.temp,
            descripcion: respuesta.weather[0].description,
            humedad: respuesta.main.humidity,
            viento: respuesta.wind.speed,
            ciudad: respuesta.name,
            estado: respuesta.sys.country,
            icon: respuesta.weather[0].icon,
            error: null,
          };
          console.log("tiempo:-------------", tiempo);
        });
  
      return tiempo;
    }
    return tiempo;
  }
  