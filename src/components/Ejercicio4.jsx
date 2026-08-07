import React from 'react';

export const Ejercicio4 = () => {
  // Arreglo de objetos "alumno" según las especificaciones
  const alumnos = [
    {
      name: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      name: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      name: 'Gerson',
      edad: 18,
      calificacion: 9,
    },
  ];

  // Función para calcular el promedio de las calificaciones
  const calcularPromedio = (listaAlumnos) => {
    const sumaTotal = listaAlumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
    return (sumaTotal / listaAlumnos.length).toFixed(2);
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '15px' }}>
      <h3>Ejercicio 4: Promedio de Calificaciones de Alumnos</h3>
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