// Componente para sumar los elementos de un arreglo numérico
export const Ejercicio2 = () => {
  // Lista de números a procesar
  const numeros = [10, 20, 30, 40, 50];
  
  // Acumulación de valores utilizando el método .reduce()
  const suma = numeros.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <h3>Ejercicio 2: Suma de Elementos de un Arreglo</h3>
      <p>Arreglo: <strong>[{numeros.join(', ')}]</strong></p>
      <p>Suma total: <strong>{suma}</strong></p>
    </div>
  );
};