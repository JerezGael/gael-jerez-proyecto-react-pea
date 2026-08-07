// Componente para calcular el área de un cuadrado
export const Ejercicio1 = () => {
  const lado = 5;
  const area = lado * lado;

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <img 
          src={`${import.meta.env.BASE_URL}images/cuadrado.png`} 
          alt="Cuadrado" 
          style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
        />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 1: Área de un Cuadrado</h3>
      </div>
      <p>Lado ingresado: <strong>{lado} cm</strong></p>
      <p>Área calculada: <strong>{area} cm²</strong></p>
    </div>
  );
};