import TituloEjercicio from '../TituloEjercicio';
import ParentComponent from './ParentComponent';

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      <ParentComponent />
    </section>
  );
}
