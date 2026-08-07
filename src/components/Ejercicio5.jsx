import { useState } from 'react';

// Componente interactivo que maneja un contador mediante un hook de estado
export const Ejercicio5 = () => {
  // Estado local para almacenar el valor numérico del contador
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h3>Ejercicio 5: Contador Interactivo</h3>
      <p>Valor actual: <strong>{contador}</strong></p>
      
      {/* Botones con eventos onClick para modificar el estado */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
};