import { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    let erroresTemp = {};
    let nombreNormalizado = (nombre || '').toLowerCase();

    // Validación para el nombre
    if (!nombreNormalizado) {
      erroresTemp.nombre = 'El nombre es requerido';
    } else if (nombreNormalizado.length < 3) {
      erroresTemp.nombre = 'El nombre debe tener al menos 3 caracteres';
    } else if (!/^[a-zA-Z ]+$/.test(nombreNormalizado)) {
      erroresTemp.nombre = 'El nombre solo debe contener letras y espacios';
    }  
    // Validación para el email
    if (!email) {
      erroresTemp.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      erroresTemp.email = 'El email no es válido';
    }
    // Validación para el mensaje
    if (!mensaje) erroresTemp.mensaje = 'El mensaje es requerido';
    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    // Mostrar los datos en consola y en una ventana emergente
    const datosFormulario = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`;
    console.log(datosFormulario);
    alert(datosFormulario);

    // Limpiar los campos del formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        {errores.nombre && <p>{errores.nombre}</p>}
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {errores.email && <p>{errores.email}</p>}
      </div>
      <div>
        <label>
          Mensaje:
          <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        </label>
        {errores.mensaje && <p>{errores.mensaje}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}