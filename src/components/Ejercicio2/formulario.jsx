import { useState } from 'react'

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  // Manejamos el cambio de los inputs del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  // Manejamos el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Datos del formulario:', formData)
    console.log('Datos del formulario:', formData)
  }

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <br />
        <div>
          <label>Mensaje:</label>
          <textarea rows ="4" name="mensaje" value={formData.mensaje} onChange={handleInputChange} />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}