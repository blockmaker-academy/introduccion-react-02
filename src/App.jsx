import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Ejercicios from './pages/Ejercicios';
import AcercaDe from './pages/AcercaDe';
import Contacto from './pages/Contacto';
import Api from './pages/Api';
import NoEncontrado from './pages/NoEncontrado';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/ejercicios">Ejercicios</Link>
          <Link to="/about">Acerca de</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/api">Api</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />          
          <Route path="/ejercicios" element={<Ejercicios />} />
          <Route path="/about" element={<AcercaDe />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/api" element={<Api />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </div>
    </Router>
  );
}
