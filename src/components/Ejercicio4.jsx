import React from 'react';

// Componente para filtrar únicamente los números pares de un arreglo (.filter)
export const Ejercicio4 = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pares = numeros.filter((num) => num % 2 === 0);

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <img 
          src={`${import.meta.env.BASE_URL}images/estudiantes.png`} 
          alt="Estudiantes" 
          style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
        />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 4: Filtrar Números Pares (.filter)</h3>
      </div>
      <p>Arreglo original: <strong>[{numeros.join(', ')}]</strong></p>
      <p>Números pares: <strong>[{pares.join(', ')}]</strong></p>
    </div>
  );
};