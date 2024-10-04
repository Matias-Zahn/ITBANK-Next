"use client"

import { useState } from "react";
import HistoryInformation from "./HistoryInformation";

function HistoryCard() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(true);
  };
  return (
    <div>
      <div className="card">
        <div className="card-content_items">
          <div>
            <p>Alberto Mansilla</p>
            <p style={{ color: "green" }}>Transferencia recibida</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>$14.000,00</p>
            <p>14/09</p>
            <button onClick={handleClick}>Ver mas</button>
          </div>
        </div>
      </div>
      {showMore && <HistoryInformation setShowMore={setShowMore} />}
    </div>
  );
}
export default HistoryCard;