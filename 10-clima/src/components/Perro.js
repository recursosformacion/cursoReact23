import { useState, useEffect } from "react";

export default function Perro() {
  const [imagen, setImagen] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImagen(dog.message); // ⬅️ Guardar datos
        setIsLoading(false); // ⬅️ Desactivar modo "cargando"
      });
  }, []);

  if (isLoading) {
    // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={imagen} alt="Imagen de perrito aleatoria" />
    </div>
  );
}