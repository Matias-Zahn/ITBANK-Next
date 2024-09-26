import style from './footer.module.css';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="politica">
        <p>
          &copy; 2024 ITBANK |{' '}
          <a className={style.a} href="#">
            Política de Privacidad
          </a>{' '}
          |{' '}
          <a className={style.a} href="#">
            Términos y Condiciones
          </a>
        </p>
      </div>
    </footer>
  );
}
export { Footer };
