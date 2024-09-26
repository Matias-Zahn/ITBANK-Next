'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './sidebar.module.css';
import {
  IconBuildingBank,
  IconCreditCardPay,
  IconTransfer,
  IconTransformFilled,
  IconUserCircle,
} from '@tabler/icons-react';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const currentLocation = usePathname();

  return (
    <div className={style.sidebar}>
      <nav className={style.navbar}>
        <ul>
          <li className={style.li}>
            <Link className={style.a} href="/cuenta">
              <IconUserCircle />
              <span
                className={style.span}
                style={{
                  color: currentLocation === '/cuenta' ? '#6495ed' : 'black',
                }}
              >
                Cuenta
              </span>
            </Link>
          </li>
          <li className={style.li}>
            <Link className={style.a} href="/transferencias">
              <IconTransfer />
              <span
                className={style.span}
                style={{
                  color:
                    currentLocation === '/transferencias' ? '#6495ed' : 'black',
                }}
              >
                Transferencias
              </span>
            </Link>
          </li>
          <li className={style.li}>
            <Link className={style.a} href="/prestamos">
              <IconBuildingBank />
              <span
                className={style.span}
                style={{
                  color: currentLocation === '/prestamos' ? '#6495ed' : 'black',
                }}
              >
                Prestamos
              </span>
            </Link>
          </li>
          <li className={style.li}>
            <Link className={style.a} href="/conversor">
              <IconTransformFilled />
              <span
                className={style.span}
                style={{
                  color: currentLocation === '/conversor' ? '#6495ed' : 'black',
                }}
              >
                Conversor de divisas
              </span>
            </Link>
          </li>
          <li className={style.li}>
            <Link className={style.a} href="/servicios">
              <IconCreditCardPay />
              <span
                className={style.span}
                style={{
                  color: currentLocation === '/servicios' ? '#6495ed' : 'black',
                }}
              >
                Pago de servicios
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { Sidebar };
