import React from 'react';

export const Ejercicio2 = () => {
  // Función que recibe un arreglo y retorna la suma de sus elementos
  const sumarArreglo = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
  };

  const numeros = [10, 20, 30, 40, 50];

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '15px' }}>
      <h3>Ejercicio 2: Suma de Elementos de un Arreglo</h3>
      <p>Arreglo: <strong>[{numeros.join(', ')}]</strong></p>
      <p>Suma total: <strong>{sumarArreglo(numeros)}</strong></p>
    </div>
  );
};// Commit 3
