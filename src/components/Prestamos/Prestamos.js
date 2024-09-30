"use client";
import React, { useState } from "react";
import style from "./Prestamos.module.css";

const Prestamos = () => {
  const [capital, setCapital] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [interes, setInteres] = useState('');
  const [tabla, setTabla] = useState([]);
  const [totales, setTotales] = useState({
    totalCapital: 0,
    totalInteres: 0,
    totalPago: 0,
  });

  const genTable = () => {
    const capitalNum = Number(capital);
    const cuotasNum = Number(cuotas);
    const interesNum = Number(interes);

    if (capitalNum > 0) {
      let tempTabla = [];
      let totalInteres = 0;
      let totalPago = 0;

      for (let i = 1; i <= cuotasNum; i++) {
        const ca = capitalNum / cuotasNum;
        const d1 = ca.toFixed(2);
        const i2 = ((capitalNum * interesNum) / 100) / cuotasNum;
        const d2 = i2.toFixed(2);
        const r = ca + i2;
        const d3 = r.toFixed(2);

        tempTabla.push({
          nro: i,
          capital: d1,
          interes: d2,
          pago: d3,
        });

        totalInteres += i2;
        totalPago += r;
      }

      setTabla(tempTabla);
      setTotales({
        totalCapital: capitalNum.toFixed(2),
        totalInteres: totalInteres.toFixed(2),
        totalPago: totalPago.toFixed(2),
      });
    } else {
      alert("Falta ingresar un número válido para el capital.");
    }
  };

  return (
    <div className={style.form}>
      <fieldset className={style.fieldset}>
        <h2 className={style.title}>SIMULADOR DE PRÉSTAMO</h2>
        <form>
          <div>
            <label className={style.inputLabel} htmlFor="capital">
              Capital:
              <input
                type="number"
                placeholder="Ingrese el capital prestado"
                id="capital"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
                className={style.inputField}
              />
            </label>
          </div>
          <div>
            <label className={style.inputLabel} htmlFor="cuotas">
              Cuotas:
              <input
                type="number"
                placeholder="Ingrese las cuotas del préstamo"
                id="cuotas"
                value={cuotas}
                onChange={(e) => setCuotas(e.target.value)}
                className={style.inputField}
              />
            </label>
          </div>
          <div>
            <label className={style.inputLabel} htmlFor="interes">
              Interés:
              <input
                type="number"
                placeholder="Ingrese el interés a generar"
                id="interes"
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
                className={style.inputField}
              />
            </label>
          </div>
        </form>
        <button type="button" onClick={genTable} className={style.calculateButton}>
          Calcular
        </button>
      </fieldset>

      {tabla.length > 0 && (
        <table className={style.tab}>
          <thead>
            <tr>
              <td className={style.header}>NRO</td>
              <td className={style.header}>C</td>
              <td className={style.header}>INTERÉS</td>
              <td className={style.header}>IMPORTE A PAGAR</td>
            </tr>
          </thead>
          <tbody>
            {tabla.map((row, index) => (
              <tr key={index} className={style.row}>
                <td className={style.cell}>{row.nro}</td>
                <td className={style.cell}>{row.capital}</td>
                <td className={style.cell}>{row.interes}</td>
                <td className={style.cell}>{row.pago}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className={style.footer}>
            <tr>
              <td className={style.footerCell}>TOTAL</td>
              <td className={style.footerCell}>{totales.totalCapital}</td>
              <td className={style.footerCell}>{totales.totalInteres}</td>
              <td className={style.footerCell}>{totales.totalPago}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Prestamos;
