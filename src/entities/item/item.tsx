import { FolderIcon, PenIcon, TrashIcon } from "../../shared/assets/icon";

import style from "./item.module.scss";

type Props = {
  description: string;
  name: string;
  categoryId?: number | null;
  deleteTask?: (id: number) => void;
  editTask?: (id: number) => void;
};

export const Item = ({ description, categoryId, name }: Props) => {
  return (
    <div className={style.item}>
      <div className={style.item__icons}>
        <button type="button" className={style.item__icon}>
          <PenIcon />
        </button>
        <button type="button" className={style.item__icon}>
          <TrashIcon />
        </button>
      </div>
      <div className={style.item__nameWrapper}>
        <div className={style.item__name}>{name}</div>
        {categoryId && (
          <div className={style.item__categoryName}>
            <FolderIcon /> <span>{categoryId}</span>
          </div>
        )}
      </div>
      <p className={style.item__description}>{description}</p>
    </div>
  );
};
