import { useTodo } from "@/shared/hooks/useTodo";
import { FolderIcon, PenIcon } from "@/shared/assets/icon";
import { DeleteConfirmation } from "@/entities/deleteConfirm";

import style from "./item.module.scss";

type Props = {
  description: string;
  name: string;
  categoryId?: number;
  deleteTask?: (id: number) => void;
  editTask?: (id: number) => void;
  variant: "task" | "category";
  id: number;
};

export const Item = ({ description, categoryId, name, id, variant }: Props) => {
  const { categories } = useTodo();

  const getCategory = categories.find((c) => c.id === categoryId);

  return (
    <div className={style.item}>
      <div className={style.item__icons}>
        <button type="button" className={style.item__icon}>
          <PenIcon />
        </button>
        <DeleteConfirmation
          className={style.item__icon}
          name={name}
          id={id}
          variant={variant}
        />
      </div>
      <div className={style.item__nameWrapper}>
        <div className={style.item__name}>{name}</div>
        {getCategory && (
          <div className={style.item__categoryName}>
            <FolderIcon /> <span>{getCategory.name}</span>
          </div>
        )}
      </div>
      <p className={style.item__description}>{description}</p>
    </div>
  );
};
