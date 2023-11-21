import { Link } from 'react-router-dom';
import Ejercicio1 from '../components/Ejercicio1/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2/Ejercicio2';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TituloPrincipal from '../components/TituloPrincipal';
import '../index.css';

export default function Ejercicios() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />
        <Ejercicio2 />
        <Link to="/">Volver al Inicio</Link>
      </main>
      <Footer />
    </>
  );
}
