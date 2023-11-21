import { Link } from 'react-router-dom';
import '../index.css';
import Personajes from '../components/Ejercicio4/Personajes';

export default function Api() {
  return (
    <div className="pages-container">
      <h2>API de Rick and Morty</h2>
      <Personajes />
      <Link to="/">Volver al Inicio</Link>
      <img src="/blockmaker-logo.png" alt="blockmaker-logo" width={300} />
    </div>
  );
}