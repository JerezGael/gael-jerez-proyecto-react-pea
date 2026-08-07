import { useState } from 'react';

// Componente contador interactivo con imagen ilustrativa
export const Ejercicio5 = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <img src="/images/contador.png" alt="Contador" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 5: Contador Interactivo</h3>
      </div>
      <p>Valor actual: <strong>{contador}</strong></p>
      
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
};