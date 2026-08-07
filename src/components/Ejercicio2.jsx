export const Ejercicio2 = () => {
  // Función que recibe un arreglo como parámetro y retorna la suma
  const sumarArreglo = (arr) => arr.reduce((acum, val) => acum + val, 0);

  const numeros = [10, 20, 30, 40, 50];
  const sumaTotal = sumarArreglo(numeros);

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <img 
          src={`${import.meta.env.BASE_URL}images/arreglo.png`} 
          alt="Arreglo" 
          style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
        />
        <h3 style={{ margin: 0 }}>Ejercicio 2: Suma de Elementos de un Arreglo</h3>
      </div>
      <p>Arreglo: <strong>[{numeros.join(', ')}]</strong></p>
      <p>Suma calculada (mediante función): <strong>{sumaTotal}</strong></p>
    </div>
  );
};