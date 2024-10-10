import Card from '@/components/Cuenta/Card';
import History from '@/components/Cuenta/History';
import style from './cuenta.module.css';

function Cuenta() {
  return (
    <main>
      <section className={style.content}>
        <div className={style.content_items}>
          <h1>Desde cuentas</h1>
          <div className={style.content_items_card}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <History />
      </section>
    </main>
  );
}
export default Cuenta;
