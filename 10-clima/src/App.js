

import "./App.css";
import ClimaApp from "./components/clima/ClimaApp";
import Perro from "./components/Perro";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/clima' element={<ClimaApp />} />
      <Route path='/perro' element={<Perro />} />
    </Routes>
  );
}

export default App;
