import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

import styles from './TodoItem.module.css';

const TodoItem = ({
  todo,
  handleChangeProps,
  deleteTodoProps,
  handleUpdateProps,
}) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button
          onClick={() => {
            deleteTodoProps(todo.id);
          }}
          type="button"
        >
          <FaRegTrashAlt style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={todo.title}
        onChange={(e) => handleUpdateProps(e.target.value, todo.id)}
        onKeyDown={(e) => handleUpdateDone(e)}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleUpdateProps: PropTypes.func.isRequired,
};

export default TodoItem;
