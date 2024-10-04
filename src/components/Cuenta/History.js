import HistoryCard from "./HistoryCard"

function History() {
  return (
    
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Movimientos</h3>
    
          <div style={{ display: "grid", gap: "1rem" }}>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </div>
        </div>
      
  )
}

export default History