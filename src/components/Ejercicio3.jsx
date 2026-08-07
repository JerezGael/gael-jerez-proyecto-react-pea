// Componente para transformar una lista dividiendo sus elementos entre 5
export const Ejercicio3 = () => {
  // Arreglo numérico base
  const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  
  // Generación de un nuevo arreglo transformado usando .map()
  const arregloDividido = arregloOriginal.map((num) => num / 5);

  return (
    <div>
      <h3>Ejercicio 3: Dividir Arreglo para 5 (.map)</h3>
      <p>Arreglo original: <strong>[{arregloOriginal.join(', ')}]</strong></p>
      <p>Resultado (/ 5): <strong>[{arregloDividido.join(', ')}]</strong></p>
    </div>
  );
};