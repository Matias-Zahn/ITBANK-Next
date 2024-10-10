// eslint-disable-next-line react/prop-types
function HistoryInformation({ setShowMore }) {
    const handleModal = () => {
      setShowMore(false);
    };
  
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          border: "1px solid black",
          borderRadius: "2rem",
          height: "-100px",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "grid",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "-30px",
              right: "0",
              width: "45px",
              borderRadius: "100%",
              backgroundColor: "red",
            }}
            onClick={handleModal}
          >
            X
          </button>
          <h4 style={{ fontSize: "24px" }}> Alberto Mansilla</h4>
          <p style={{ fontSize: "18px", textAlign: "center", color: "green" }}>
            + $14.000,00
          </p>
        </div>
  
        <div style={{ display: "grid", gap: "7px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Operacion: </p>
            <p>Transferencia</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Tipo: </p>
            <p>Recibida</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Origen: </p>
            <p>ITBANK</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Fecha: </p>
            <p>14/09/2024</p>
          </div>
        </div>
      </div>
    );
  }
  export default HistoryInformation;