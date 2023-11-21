import { useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const [message, setMessage] = useState('Mensaje inicial');
  const [isUpdated, setIsUpdated] = useState(false);

  const changeMessage = () => {
    setMessage('Mensaje actualizado');
    setIsUpdated(true); 
  };

  const resetMessage = () => {
    setMessage('Mensaje inicial');
    setIsUpdated(false); 
  };

  return (
    <div>
      <h2>Componente Padre</h2>
      <p>Mensaje: {message}</p>
      {!isUpdated && <button onClick={changeMessage}>Actualizar Mensaje</button>}
      {isUpdated && <button onClick={resetMessage}>Reset</button>}
      <ChildComponent message={message} />
    </div>    
  );
}