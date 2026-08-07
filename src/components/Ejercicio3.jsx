import React from 'react';

export const Ejercicio3 = () => {
  // Arreglo original proporcionado en la guía
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  // Función empleando el método map para dividir cada valor para 5
  const arregloDividido = arreglo.map((num) => num / 5);

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '15px' }}>
      <h3>Ejercicio 3: Dividir Arreglo para 5 (.map)</h3>
      <p>Arreglo original: <strong>[{arreglo.join(', ')}]</strong></p>
      <p>Resultado (/ 5): <strong>[{arregloDividido.join(', ')}]</strong></p>
    </div>
  );
};// Commit 4
