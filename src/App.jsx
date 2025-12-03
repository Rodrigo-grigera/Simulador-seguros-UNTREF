import { useState, useEffect } from "react";
import Formulario from "./componentes/Formulario/Form";
import OpcionesCobertura from "./componentes/OpcionCobertura/OpcionCobertura";
import { calcularCostoSegunDatos } from "./utils/calculo";
import "./App.css";

function App() {
  const [datosUsuario, setDatosUsuario] = useState({
    edad: "",
    tipoPropiedad: "",
    valorPropiedad: ""
  });
  
  const [error, setError] = useState("");
  const [cotizacion, setCotizacion] = useState(null);

  useEffect(() => {
    const { edad, tipoPropiedad, valorPropiedad } = datosUsuario;

      if (error) {
      setCotizacion(null);
      return;
    }

    if (!edad || !tipoPropiedad || !valorPropiedad) {
      setCotizacion(null);
      return;
    }

    const base = calcularCostoSegunDatos(datosUsuario);

    setCotizacion({
      basico: base,
      intermedio: base * 1.2,
      premium: base * 1.5,
    });

  }, [datosUsuario,error]);

  return (
    <div className="contenedor-principal">
      <h1>Cotizacion de Seguro</h1>

      <Formulario
        datosUsuario={datosUsuario}
        setDatosUsuario={setDatosUsuario}
        error={error}
        setError={setError}
      />

      <OpcionesCobertura cotizacion={cotizacion} />
    </div>
  );
}

export default App;