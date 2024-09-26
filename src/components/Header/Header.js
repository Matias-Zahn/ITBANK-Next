import style from './header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1>ITBANK</h1>
      </div>
    </header>
  );
}
export { Header };
