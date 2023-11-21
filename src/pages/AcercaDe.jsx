import { Link } from 'react-router-dom';
import '../index.css';
export default function AcercaDe() {
  return (
    <>
      <div className="pages-container">
          <h2>Página de Acerca De</h2>;
          <Link to="/">Volver al Inicio</Link>
          <img src="/blockmaker-logo.png" alt="blockmaker-logo" width={300} />
      </div >
    </>  
  );
}