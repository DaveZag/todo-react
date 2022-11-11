import TodoItem from "./TodoItem";

const TodosList = ({
  todosArray,
  handleChangeProps,
  deleteTodoProps,
  handleUpdateProps,
}) => {
  return (
    <div className="todo-list">
      <ul>
        {todosArray.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={handleChangeProps}
              deleteTodoProps={deleteTodoProps}
              handleUpdateProps={handleUpdateProps}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default TodosList;
