import style from "./preloader.module.scss";

export const Preloader = () => {
  return (
    <div className={style.loader}>
      <div className={style.dot} />
      <div className={style.dot} />
      <div className={style.dot} />
    </div>
  );
};
