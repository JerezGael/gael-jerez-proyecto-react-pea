import React, { useState } from 'react';

export const Ejercicio5 = () => {
  // Hook useState para iniciar el acumulador en 5
  const [acumulador, setAcumulador] = useState(5);

  const incrementar = () => {
    setAcumulador(acumulador + 5);
  };

  const disminuir = () => {
    setAcumulador(acumulador - 5);
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
      <h3>Ejercicio 5: Acumulador de 5 (useState)</h3>
      <h2 style={{ fontSize: '2.5rem', color: '#646cff', margin: '10px 0' }}>{acumulador}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={incrementar} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Incrementar (+5)
        </button>
        <button onClick={disminuir} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Disminuir (-5)
        </button>
      </div>
    </div>
  );
};// Commit 6
