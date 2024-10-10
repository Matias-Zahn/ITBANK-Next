import style from '../../app/cuenta/cuenta.module.css';

function Card() {
  return (
    <div className={style.card}>
      <h3>Cuentas</h3>

      <div className={style.card_content}>
        <div className={style.card_content_items}>
          <p>Caja de ahorro $</p>
          <p>60.210,23</p>
        </div>
        <p className={style.cbu}>072727272546542</p>
      </div>
      <hr />
      <div className={style.card_content}>
        <div className={style.card_content_items}>
          <p>Caja de ahorro $</p>
          <p>0,00</p>
        </div>
        <p className={style.cbu}>072727272546542</p>
      </div>
    </div>
  );
}

export default Card;
