export const Ejercicio4 = () => {
  const alumnos = [
    { name: "Viviana", edad: 19, calificacion: 10 },
    { name: "Wendy", edad: 20, calificacion: 8 },
    { name: "Gerson", edad: 18, calificacion: 9 }
  ];

  // Función que calcula el promedio de las calificaciones de los alumnos
  const calcularPromedio = (listaAlumnos) => {
    const suma = listaAlumnos.reduce((acum, alumno) => acum + alumno.calificacion, 0);
    return (suma / listaAlumnos.length).toFixed(2);
  };

  const promedio = calcularPromedio(alumnos);

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <img 
          src={`${import.meta.env.BASE_URL}images/estudiantes.png`} 
          alt="Estudiantes" 
          style={{ width: '36px', height: '36px', objectFit: 'contain' }} 
        />
        <h3 style={{ margin: 0 }}>Ejercicio 4: Promedio de Calificaciones</h3>
      </div>
      <p>Alumnos registrados:</p>
      <ul>
        {alumnos.map((a, index) => (
          <li key={index}>
            {a.name} (Edad: {a.edad}) - Calificación: <strong>{a.calificacion}</strong>
          </li>
        ))}
      </ul>
      <p>Promedio de calificaciones: <strong>{promedio}</strong></p>
    </div>
  );
};