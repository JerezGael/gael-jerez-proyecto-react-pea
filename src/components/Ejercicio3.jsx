// Componente para dividir un arreglo entre 5 con imagen ilustrativa
export const Ejercicio3 = () => {
  const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const arregloDividido = arregloOriginal.map((num) => num / 5);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <img src="/images/division.png" alt="División" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 3: Dividir Arreglo para 5 (.map)</h3>
      </div>
      <p>Arreglo original: <strong>[{arregloOriginal.join(', ')}]</strong></p>
      <p>Resultado (/ 5): <strong>[{arregloDividido.join(', ')}]</strong></p>
    </div>
  );
};