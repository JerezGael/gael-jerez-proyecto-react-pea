import { useState } from 'react';

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
        <h3 style={{ margin: 0 }}>Ejercicio 5: Acumulador de 5</h3>
      </div>
      <p>Valor acumulado: <strong>{contador}</strong></p>

      <div className="button-group">
        <button onClick={() => setContador(contador + 5)}>Incrementar (+5)</button>
        <button onClick={() => setContador(contador - 5)}>Disminuir (-5)</button>
      </div>
    </div>
  );
};