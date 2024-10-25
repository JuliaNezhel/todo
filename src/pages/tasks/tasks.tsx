import { useTodo } from "../../shared/hooks/useTodo";
import { Header } from "../../shared/ui";
import { Item } from "../../entities/item";

const TasksPage = () => {
  const { tasks } = useTodo();

  return (
    <section>
      <Header buttonTitle="Добавить задачу" />
      {tasks?.map((task) => (
        <Item
          variant="task"
          key={task.id}
          name={task.name}
          description={task.description}
          categoryId={task.categoryId}
          id={task.id}
        />
      ))}
    </section>
  );
};

export default TasksPage;
