import React from 'react';

export const Ejercicio1 = () => {
  // Función con parámetros para calcular el área de un cuadrado
  const calcularAreaCuadrado = (lado) => {
    return lado * lado;
  };

  const ladoEjemplo = 5;

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '15px' }}>
      <h3>Ejercicio 1: Área de un Cuadrado</h3>
      <p>Lado ingresado: <strong>{ladoEjemplo} cm</strong></p>
      <p>Área calculada: <strong>{calcularAreaCuadrado(ladoEjemplo)} cm²</strong></p>
    </div>
  );
};// Commit 2
