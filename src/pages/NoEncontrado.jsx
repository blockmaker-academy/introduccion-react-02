import { Link } from 'react-router-dom';
import '../index.css';
export default function NoEncontrado() {
  return (
    <>
      <div className="inicio-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404 - Página No Encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/">Volver al Inicio</Link>
        <img src="/blockmaker-logo.png" alt="blockmaker-logo" width={300} />
      </div>
    </>
  );
}