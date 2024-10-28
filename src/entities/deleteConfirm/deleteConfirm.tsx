import { TrashIcon } from "@/shared/assets/icon";
import { useTodoActions } from "@/shared/hooks/useTodoActions";
import { DialogButtons, MainPopup } from "@/shared/ui";
import { memo, useState } from "react";


type Props = {
  className?: string;
  name?: string;
  variant: "task" | "category";
  id: number;
};

export const DeleteConfirmation = memo(
  ({ name, className, variant, id }: Props) => {
    const [show, setShow] = useState(false);
    const textDelete = variant === "task" ? "задачу" : "категорию";

    const { deleteTask, deleteCategories } = useTodoActions();

    const closeModalHandle = () => {
      setShow(false);
    };
    const onCLickHAndle = () => {
      setShow(true);
    };

    const onDeleteHandle = () =>
      variant === "task" ? deleteTask(id) : deleteCategories(id);

    return (
      <>
        <button
          type="button"
          aria-label="delete"
          onClick={onCLickHAndle}
          className={className}
        >
          <TrashIcon />
        </button>
        <MainPopup
          isOpen={show}
          onClose={closeModalHandle}
          title="Удаление задачи"
        >
          <p>
            Вы уверены, что хотите удалить {textDelete} {name}?
          </p>
          <DialogButtons
            primaryButtonClick={onDeleteHandle}
            primaryButtonText="Да"
            secondaryButtonClick={closeModalHandle}
            secondaryButtonText="Нет"
          />
        </MainPopup>
      </>
    );
  },
);
