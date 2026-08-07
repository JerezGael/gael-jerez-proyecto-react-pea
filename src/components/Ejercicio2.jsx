// Componente para sumar elementos de un arreglo con imagen ilustrativa
export const Ejercicio2 = () => {
  const numeros = [10, 20, 30, 40, 50];
  const suma = numeros.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <img src="/images/arreglo.png" alt="Arreglo" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 2: Suma de Elementos de un Arreglo</h3>
      </div>
      <p>Arreglo: <strong>[{numeros.join(', ')}]</strong></p>
      <p>Suma total: <strong>{suma}</strong></p>
    </div>
  );
};