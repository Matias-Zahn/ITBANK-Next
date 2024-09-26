'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './sidebar.module.css';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = usePathname();

  const currentLocation = location.pathname;
  return (
    <div className={style.sidebar}>
      <nav className={style.navbar}>
        <ul>
          <li className={style.li}>
            <Link className={style.a} href="/cuenta">
              {/* <AccountIcons /> */}
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
              {/* <TransfersIcons /> */}
              <span
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
              {/* <LoansIcons /> */}
              <span
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
              {/* <ConverterIcons /> */}
              <span
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
              {/* <ConverterIcons /> */}
              <span
                style={{
                  color:
                    currentLocation === '/pagar-servicios'
                      ? '#6495ed'
                      : 'black',
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
