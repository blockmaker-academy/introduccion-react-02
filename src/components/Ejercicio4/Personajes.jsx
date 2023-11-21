import { useState, useEffect } from 'react';

export default function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        setPersonajes(data.results);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al realizar la petición:', error);
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando personajes...</p>;
  if (error) return <p>Error al cargar los personajes: {error}</p>;

  return (
    <div className="personajes-container">
      {personajes.map(personaje => (
        <div key={personaje.id} className="personaje-card">
          <img 
            src={personaje.image} 
            alt={personaje.name} 
            className="personaje-image"
          />
          <h3 className="personaje-name">{personaje.name}</h3>
        </div>
      ))}
    </div>
  );
}