import { Item } from "../../entities/item";
import { useTodo } from "../../shared/hooks/useTodo";
import { Header } from "../../shared/ui";

const CategoryPage = () => {
  const { categories } = useTodo();

  return (
    <div>
      <Header buttonTitle="Добавить категорию" />
      {/* <Modal title="f" closeModal={()=>{}}>dfvdf</Modal> */}
      {categories?.map((category) => (
        <Item
          variant="category"
          key={category.id}
          name={category.name}
          description={category.description}
          id={category.id}
          
        />
      ))}
    </div>
  );
};

export default CategoryPage;
