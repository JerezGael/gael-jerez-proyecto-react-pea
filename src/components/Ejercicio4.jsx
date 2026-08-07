// Componente para calcular promedio de calificaciones con imagen ilustrativa
export const Ejercicio4 = () => {
  const alumnos = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 },
  ];

  const calcularPromedio = (listaAlumnos) => {
    const sumaTotal = listaAlumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
    return (sumaTotal / listaAlumnos.length).toFixed(2);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <img src="/images/estudiantes.png" alt="Estudiantes" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Ejercicio 4: Promedio de Calificaciones de Alumnos</h3>
      </div>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            <strong>{alumno.name}</strong> ({alumno.edad} años) - Calificación: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <p>Promedio de calificaciones: <strong>{calcularPromedio(alumnos)}</strong></p>
    </div>
  );
};