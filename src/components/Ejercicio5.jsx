import { useState } from 'react';

// Componente contador interactivo con estado local y control de botones
export const Ejercicio5 = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <img 
          src={`${import.meta.env.BASE_URL}images/contador.png`} 
          alt="Contador" 
          style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
        />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 5: Contador Interactivo</h3>
      </div>
      <p>Valor actual: <strong>{contador}</strong></p>

      <div className="button-group">
        <button onClick={() => setContador(contador + 5)}>Incrementar</button>
        <button onClick={() => setContador(contador - 5)}>Decrementar</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>
    </div>
  );
};