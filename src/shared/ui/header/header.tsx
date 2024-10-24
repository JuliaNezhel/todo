import style from './header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <a className={style.logo}>ToDo List</a>
      <nav>
        <ul className={style.navList}>
            <li>
                <a  className={style.link}>Задачи</a>
            </li>
            <svg width="2" height="28" viewBox="0 0 2 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="2" height="28" fill="#DBE2EF"/>
</svg>

            <li>
                <a className={style.link}>Категории</a>
            </li>
        </ul>
      </nav>

      <button className={style.button}>Добавить задачу</button>
    </header>
  );
};
