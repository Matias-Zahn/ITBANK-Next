"use client"; 
import { useState } from 'react';
import style from'./transfers.module.css';

function Transferir() {
  const [alias, setAlias] = useState('');
  const [monto, setMonto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarTransferencia = () => {
    //  implementar la lógica para realizar la transferencia
    if (alias && monto) {
      setMensaje(`Transferencia de $${monto} a ${alias} realizada.`);
      // Lógica adicional para actualizar el balance en jsonn, etc.
    } else {
      setMensaje('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className={style.contenedor__tranfers}>
      <h2 className={style.contenedor__tranfers__h2}>Realizar Transferencia</h2>
      <input
        className={style.contenedor__tranfers__input}
        type="text"
        placeholder="Alias o CBU"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        className={style.contenedor__tranfers__input}
      />
      <button onClick={manejarTransferencia} className={style.contenedor__tranfers__button}>
        Transferir
      </button>
      {mensaje && <p className={style.mensaje}>{mensaje}</p>}
    </div>
  );
}

export default Transferir;
