import { Footer } from "../components/Footer";  
import { Header, Sidebar } from "../components/index";  
import { useState, useEffect } from 'react';  
import './conversor.module.css'; 

const Conversor = () => {  
  const [monedaOrigen, setMonedaOrigen] = useState('ARS');  
  const [monedaDestino, setMonedaDestino] = useState('USD');  
  const [tasaCambio, setTasaCambio] = useState(1);  
  const [saldo, setSaldo] = useState(0);  

  const opcionesMoneda = [  
    { codigo: 'USD', nombre: 'Dólar estadounidense' },  
    { codigo: 'EUR', nombre: 'Euro' },  
    { codigo: 'ARS', nombre: 'Peso argentino' },  
    { codigo: 'JPY', nombre: 'Yen japonés' },  
    { codigo: 'GBP', nombre: 'Libra esterlina' },  
  ];  

  useEffect(() => {  
    if (monedaOrigen && monedaDestino) {  
      fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOrigen}`)  
        .then((respuesta) => respuesta.json())  
        .then((datos) => {  
          setTasaCambio(datos.rates[monedaDestino]);  
        })  
        .catch((error) =>  
          console.error('Error al obtener la tasa de cambio:', error)  
        );  
    }  
  }, [monedaOrigen, monedaDestino]);  

  const saldoConvertido = (saldo * tasaCambio).toFixed(2);  

  const manejarCambioSaldo = (e) => {  
    const valor = parseFloat(e.target.value);  
    if (!isNaN(valor) && valor >= 0) {  
      setSaldo(valor);  
    } else {  
      setSaldo(0);  
    }  
  };  

  return (  
    <div>  
      <Header />  
      <Sidebar /> 
      <h2>Conversor de Divisas</h2>  

      <div>  
        <label>Cantidad a convertir: </label>  
        <input  
          type="number"  
          value={saldo}  
          onChange={manejarCambioSaldo}  
          min="0"  
          step="0.1"  
        />  
        <span>  
          {' '}  
          {opcionesMoneda.find((opt) => opt.codigo === monedaOrigen)?.nombre}  
        </span>  
      </div>  

      <div>  
        <label>Convertir de: </label>  
        <select  
          value={monedaOrigen}  
          onChange={(e) => setMonedaOrigen(e.target.value)}  
        >  
          {opcionesMoneda.map((moneda) => (  
            <option key={moneda.codigo} value={moneda.codigo}>  
              {moneda.nombre}  
            </option>  
          ))}  
        </select>  
      </div>  

      <div>  
        <label>Convertir a: </label>  
        <select  
          value={monedaDestino}  
          onChange={(e) => setMonedaDestino(e.target.value)}  
        >  
          {opcionesMoneda.map((moneda) => (  
            <option key={moneda.codigo} value={moneda.codigo}>  
              {moneda.nombre}  
            </option>  
          ))}  
        </select>  
      </div>  

      <div>  
        <h3>  
          Saldo convertido: {saldoConvertido}{' '}  
          {opcionesMoneda.find((opt) => opt.codigo === monedaDestino)?.nombre}  
        </h3>  
      </div>  
      <Footer /> 
    </div>  
  );  
}  

export default Conversor; 
