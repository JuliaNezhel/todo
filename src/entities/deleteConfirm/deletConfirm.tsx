import { memo, useState } from "react";
import { Modal } from "../../shared/ui";
import { TrashIcon } from "../../shared/assets/icon";
import { useTodoActions } from "../../shared/hooks/useTodoActions";

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

    const onDeleteHandle = () => variant === "task" ? deleteTask(id) : deleteCategories(id);
      
  

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
        {show && (
          <Modal
            title="Удаление задачи"
            closeModal={closeModalHandle}
            actionName="Да"
            onActionClick={onDeleteHandle}
            titleClose="Нет"
          >
            <p>
              Вы уверены, что хотите удалить {textDelete} {name}?
            </p>
          </Modal>
        )}
      </>
    );
  },
);
