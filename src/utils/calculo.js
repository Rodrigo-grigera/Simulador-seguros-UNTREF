export function calcularCostoSegunDatos({ edad, valorPropiedad, tipoPropiedad }) {
    
  let base = 100;

  if (tipoPropiedad === "casa") base += 50;
  if (tipoPropiedad === "departamento") base += 30;
  
  base += Number(valorPropiedad) * 0.01;

  if (edad < 25) base += 40;
  if (edad > 60) base += 20;

  return base;
}