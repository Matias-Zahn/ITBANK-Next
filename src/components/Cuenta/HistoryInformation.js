// eslint-disable-next-line react/prop-types

import style from './HistoryInformation.module.css';

function HistoryInformation({
  setShowMore,
  name,
  status,
  date,
  from,
  to,
  amount,
}) {
  const handleModal = () => {
    setShowMore(false);
  };

  const statusInfo = () => {
    if (status == 'completed') {
      return 'Recibida';
    } else if (status == 'pending') {
      return 'Pendiente';
    }

    return 'Rechazada';
  };

  return (
    <div className={style.content}>
      <div className={style.content_relative}>
        <h4 className={style.name}>{to}</h4>
        <p style={{ fontSize: '18px', textAlign: 'center', color: 'green' }}>
          + ${amount}
        </p>
      </div>

      <div className={style.amount}>
        <div className={style.amount_info}>
          <p>Operacion: </p>
          <p>Transferencia</p>
        </div>
        <div className={style.amount_info}>
          <p>Tipo: </p>
          <p>{statusInfo()}</p>
        </div>
        <div className={style.amount_info}>
          <p>Origen: </p>
          <p>ITBANK</p>
        </div>
        <div className={style.amount_info}>
          <p>Fecha: </p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
export default HistoryInformation;
