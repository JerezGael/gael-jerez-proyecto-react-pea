// Componente para procesar y renderizar datos de estudiantes
export const Ejercicio4 = () => {
  // Arreglo de objetos con la información de los alumnos
  const alumnos = [
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 },
  ];

  // Función para obtener el promedio con dos decimales usando .reduce()
  const calcularPromedio = (listaAlumnos) => {
    const sumaTotal = listaAlumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
    return (sumaTotal / listaAlumnos.length).toFixed(2);
  };

  return (
    <div>
      <h3>Ejercicio 4: Promedio de Calificaciones de Alumnos</h3>
      <ul>
        {/* Renderizado dinámico de la lista de alumnos */}
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