import { Ejercicio1 } from './components/Ejercicio1';
import { Ejercicio2 } from './components/Ejercicio2';
import { Ejercicio3 } from './components/Ejercicio3';
import { Ejercicio4 } from './components/Ejercicio4';
import { Ejercicio5 } from './components/Ejercicio5';

function App() {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Ejercicios TypeScript - React (PEA)</h1>
      <hr style={{ marginBottom: '20px' }} />

      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
      <Ejercicio4 />
      <Ejercicio5 />
    </div>
  );
}

export default App;