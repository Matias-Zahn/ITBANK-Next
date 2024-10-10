'use client';
import data from '../../data/tranfers-history.json';
import { useState } from 'react';
import HistoryInformation from './HistoryInformation';
import style from './HistoryCard.module.css';
import style2 from '../../app/cuenta/cuenta.module.css';

function HistoryCard() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      {data.map((user) => (
        <div key={user.id}>
          <div className={style2.card}>
            <div className={style2.card_content_items}>
              <div>
                <p>{user.to}</p>
                <p>Transferencia recibida</p>
              </div>

              <div className={style.details}>
                <p>$ {user.amount} </p>
                <p>{user.date}</p>
                <button onClick={handleClick}>Ver mas</button>
              </div>
            </div>
          </div>
          {showMore && (
            <HistoryInformation
              name={user.name}
              status={user.status}
              date={user.date}
              to={user.to}
              amount={user.amount}
            />
          )}
        </div>
      ))}
    </>
  );
}
export default HistoryCard;
