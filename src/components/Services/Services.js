"use client"; 
import { useState } from 'react';
import style from './Services.module.css';

function PagoServicios() {
  const [servicio, setServicio] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [cuit, setCuit] = useState('');
  const [monto, setMonto] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const servicios = [
    { id: 1, nombre: 'Electricidad' },
    { id: 2, nombre: 'Agua' },
    { id: 3, nombre: 'Gas' },
    { id: 4, nombre: 'Internet' },
  ];

  const manejarPago = () => {
    // Lógica para calcular el monto según el servicio
    if (servicio && codigoBarras && cuit) {
      // Simulación de cálculo de monto (esto debería ser reemplazado por la lógica real)
      const montoCalculado = Math.floor(Math.random() * 1000) + 100; // Monto aleatorio entre 100 y 1100
      setMonto(montoCalculado);
      setMensaje(`Pago de $${montoCalculado} para ${servicio} realizado.`);
    } else {
      setMensaje('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className={style.contenedor__pago}>
      <h2 className={style.titulo}>Pago de Servicios</h2>
      
      <select 
        className={style.select}
        value={servicio}
        onChange={(e) => setServicio(e.target.value)}
      >
        <option value="" disabled>Selecciona un servicio</option>
        {servicios.map(serv => (
          <option key={serv.id} value={serv.nombre}>{serv.nombre}</option>
        ))}
      </select>

      <input
        className={style.input}
        type="text"
        placeholder="Ingresa tu código de barras"
        value={codigoBarras}
        onChange={(e) => setCodigoBarras(e.target.value)}
      />
      <input
        className={style.input}
        type="text"
        placeholder="Ingresa tu CUIT"
        value={cuit}
        onChange={(e) => setCuit(e.target.value)}
      />
      
      <button onClick={manejarPago} className={style.boton}>
        Pagar
      </button>
      
      {mensaje && <p className={style.mensaje}>{mensaje}</p>}
    </div>
  );
}

export default PagoServicios;
