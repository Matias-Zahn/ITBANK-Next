import Card from "@/components/Cuenta/Card";
import History from "@/components/Cuenta/History";

function Cuenta() {
  return (
    <main>
      <section className="content">
        <div className="content-items">
          <h1>Desde cuentas</h1>
          <div className="content-items-card">
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
