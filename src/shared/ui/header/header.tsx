import { NavLink, NavLinkRenderProps } from "react-router-dom";
import style from "./header.module.scss";
import { ROUTES } from "../../enums/pathRoutes";

type Props = {
  buttonTitle?: string;
};

export const Header = ({ buttonTitle }: Props) => {
  const styleLink = ({ isActive }: NavLinkRenderProps): string | undefined => {
    return isActive ? `${style.header__link_isActive} ${style.header__link}` : style.header__link;
  };
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <a className={style.header__logo}>ToDo List</a>
        <nav>
          <ul className={style.header__navList}>
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
      </div>

      <button className={style.header__button}>{buttonTitle}</button>
    </header>
  );
};
