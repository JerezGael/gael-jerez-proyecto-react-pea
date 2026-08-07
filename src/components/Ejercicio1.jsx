// Componente para calcular el área de un cuadrado
export const Ejercicio1 = () => {
  // Definición del lado del cuadrado en centímetros
  const lado = 5;
  
  // Cálculo de la superficie (fórmula: lado * lado)
  const area = lado * lado;

  return (
    <div>
      <h3>Ejercicio 1: Área de un Cuadrado</h3>
      <p>Lado ingresado: <strong>{lado} cm</strong></p>
      <p>Área calculada: <strong>{area} cm²</strong></p>
    </div>
  );
};