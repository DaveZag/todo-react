import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoProps }) => {
  const [value, setValue] = useState('');

  const handleInput = (e) => e.target.value;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={value}
        onChange={(e) => setValue(handleInput(e))}
        className="input-text"
      />
      <button type="submit" className="input-submit" onClick={handleSubmit}>
        <AiFillPlusCircle className="submit-icon" />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
