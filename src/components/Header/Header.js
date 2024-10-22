'use client';

import { IconUserCircle } from '@tabler/icons-react';
import style from './header.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Session from './Session';

function Header() {
  const [modal, setModal] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.title}>
          <Image src="/bank.png" width={40} height={40} alt="" />
          <h1>ITBANK</h1>
        </div>
        <button
          onClick={() => setModal(!modal)}
          className={`${style.button} ${modal && style.active_true}`}
        >
          <div className={style.profile}>
            <IconUserCircle />
            <p>Matias Zahn</p>
          </div>
          <Session modal={modal} setModal={setModal} />
        </button>
      </div>
    </header>
  );
}
export { Header };
