import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosArray,
  handleChangeProps,
  deleteTodoProps,
  handleUpdateProps,
}) => (
  <div className="todo-list">
    <ul>
      {todosArray.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          handleUpdateProps={handleUpdateProps}
        />
      ))}
    </ul>
  </div>
);

TodosList.propTypes = {
  todosArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleUpdateProps: PropTypes.func.isRequired,
};
export default TodosList;
