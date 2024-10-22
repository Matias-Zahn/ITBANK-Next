import { IconDoorExit } from '@tabler/icons-react';
import styles from './header.module.css';
import { redirect, useRouter } from 'next/navigation';

function Session({ modal, setModal }) {
  const router = useRouter();

  const handleSession = () => {
    setModal(false);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <button
      onClick={handleSession}
      className={`${styles.modal} ${modal ? styles.active : ''}`}
    >
      <IconDoorExit />
      <p>Cerrar Sesion</p>
    </button>
  );
}
export default Session;
