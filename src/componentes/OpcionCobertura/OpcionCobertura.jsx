
import "./OpcionCobertura.css";

export default function OpcionesCobertura({ cotizacion }) {

  if (!cotizacion) {
    return <p>Ingrese todos los datos para ver las opciones de cobertura.</p>;
  }

  return (
    <article  className="coberturas">
      <div>
        <h2>Opciones de Cobertura</h2>
      </div>

      <section className="conte-li">

        <div>
          <p>Básico: <span>${cotizacion.basico.toFixed(2)}</span></p>
        </div>

        <div>
          <p>Intermedio: <span>${cotizacion.intermedio.toFixed(2)}</span></p>
        </div>

        <div>
          <p>Premium: <span>${cotizacion.premium.toFixed(2)}</span></p>
        </div>
      </section>
    </article>
  );
}