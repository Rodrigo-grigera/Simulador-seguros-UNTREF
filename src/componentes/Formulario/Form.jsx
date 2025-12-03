import "./Formulario.css";

export default function Formulario({ datosUsuario, setDatosUsuario,error,setError }) {

const handleChange = (e) => {
  const { name, value } = e.target;
  
  if (value < 0 || value === "-"){
    setError("No se aceptan números negativos");
    return
  }
  if(name === "edad" && Number(value) > 105){
    datosUsuario.edad = "";
    setError("Su edad excede el maximo para ser cotizado")
    return
  }
  
  setError("");

  setDatosUsuario({
    ...datosUsuario,
    [name]: value
  });
};

function handleReset(e){
  e.preventDefault();
  setDatosUsuario({
    edad: "",
    tipoPropiedad: "",
    valorPropiedad: " " ,
  });
 return 

}

  

  return (
    <form className="formulario">
      <h2>Datos del asegurado</h2>
      
      <section className="sec-input">

      <label>Edad</label>
      <input
        type="number"
        name="edad"
        max={105}
        value={datosUsuario.edad}
        onChange={handleChange}
        />

      <label>Tipo de propiedad</label>
      <select
        name="tipoPropiedad"
        value={datosUsuario.tipoPropiedad}
        onChange={handleChange}
      >
        <option value="">Seleccione</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
      </select>

      <label>Valor de la propiedad</label>
      <input 
        type="number"
        name="valorPropiedad"
        value={datosUsuario.valorPropiedad}
        onChange={handleChange}
        />
        </section>
        {error && <p className="error">{error}</p>}

        <button onClick={handleReset}>Limpiar</button>
    </form>
  );
}
