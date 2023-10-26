// Importamos Routes y Route de react-router-dom
import { Route, Routes } from 'react-router-dom'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    // Definimos las Rutas con el componente Padre Routes
    <Routes>
      !-- Definimos cada ruta de nuestra app con el componente Route. En este caso decimos que es el index y no hace --
      falta poner ninguna ruta.
      <Route index element={<Home />} />
      !-- Definimos la ruta que corresponde en "path" y en element ponemos el componente pagina que tiene que ser renderizado.--
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      !-- Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta
        actúa como una captura de todas las URL para las cuales no tenemos rutas
        explícitas definidas. --
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}