import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const InputTodo = ({ addTodoProps }) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    return e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoProps(value);
    setValue("");
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
      <button className="input-submit">
        <AiFillPlusCircle className="submit-icon" />
      </button>
    </form>
  );
};

export default InputTodo;
