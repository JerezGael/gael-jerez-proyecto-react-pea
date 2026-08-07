import { Ejercicio1 } from './components/Ejercicio1';
import { Ejercicio2 } from './components/Ejercicio2';
import { Ejercicio3 } from './components/Ejercicio3';
import { Ejercicio4 } from './components/Ejercicio4';
import { Ejercicio5 } from './components/Ejercicio5';

function App() {
  return (
    <main style={{ width: '100%' }}>
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', color: '#f8fafc', marginBottom: '8px' }}>
          Ejercicios TypeScript - React (PEA)
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
          Demostración de lógica y componentes interactivos
        </p>
      </header>

      <div className="card"><Ejercicio1 /></div>
      <div className="card"><Ejercicio2 /></div>
      <div className="card"><Ejercicio3 /></div>
      <div className="card"><Ejercicio4 /></div>
      <div className="card"><Ejercicio5 /></div>
    </main>
  );
}

export default App;