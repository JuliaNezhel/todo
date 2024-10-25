import { NavLink, NavLinkRenderProps } from "react-router-dom";
import style from "./header.module.scss";
import { ROUTES } from "../../enums/pathRoutes";


type Props = {
  buttonTitle?: string
}

export const Header = ({buttonTitle}: Props) => {
  const styleLink = ({ isActive }: NavLinkRenderProps): string | undefined => {
    return isActive ? `${style.link__isActive} ${style.link}` : style.link;
  };
  return (
    <header className={style.header}>
      <a className={style.logo}>ToDo List</a>
      <nav>
        <ul className={style.navList}>
          <li>
            <NavLink to={ROUTES.TASKS} className={styleLink}>
              Задачи
            </NavLink>
          </li>
          <svg
            width="2"
            height="28"
            viewBox="0 0 2 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2" height="28" fill="#DBE2EF" />
          </svg>

          <li>
            <NavLink to={ROUTES.CATEGORY} className={styleLink}>
              Категории
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className={style.button}>{buttonTitle}</button>
    </header>
  );
};
