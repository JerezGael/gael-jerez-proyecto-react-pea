// Componente para transformar un arreglo dividiendo sus elementos para 5 (.map)
export const Ejercicio3 = () => {
  const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const divididos = numeros.map((num) => num / 5);

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <img 
          src={`${import.meta.env.BASE_URL}images/division.png`} 
          alt="División" 
          style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
        />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 3: Dividir Arreglo para 5 (.map)</h3>
      </div>
      <p>Arreglo original: <strong>[{numeros.join(', ')}]</strong></p>
      <p>Resultado (/ 5): <strong>[{divididos.join(', ')}]</strong></p>
    </div>
  );
};