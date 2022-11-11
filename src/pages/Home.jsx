import TodosList from "../components/TodosList";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import InputTodo from "../components/InputTodo";

const Home = () => {
  const getInitialTodos = () => {
    const savedData = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(savedData);
    return parsedTodos || [];
  };

  const [todosArray, setTodosArray] = useState(getInitialTodos());

  // Load todos from localStorage if any is found
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) {
      setTodosArray(data);
    }
  }, []);

  // Save todosArray to local storage and track all changes made to it
  useEffect(() => {
    const data = JSON.stringify(todosArray);
    localStorage.setItem("todos", data);
  }, [todosArray]);

  // Store changes made to the checkboxes in the corresponding array object
  const handleChange = (id) => {
    setTodosArray((prevState) => {
      const newState = prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newState;
    });
  };

  // Store changes made to any todo in the correponding object in the array
  const handleUpdate = (updatedTitle, id) => {
    setTodosArray([
      ...todosArray.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: updatedTitle };
        }
        return todo;
      }),
    ]);
  };

  // Add todo in the todos array else return an error message
  const addTodo = (value) => {
    if (value.trim()) {
      setTodosArray([...todosArray, { id: Date.now(), title: value, completed: false }]);
    } else {
      alert("enter something");
    }
  };

  // Delete todo from the array
  const deleteTodo = (id) => {
    setTodosArray([
      ...todosArray.filter((todo) => {
        // Note that the spread operator created a brand new object
        // thus we're not mutating the state directly

        return todo.id !== id;
      }),
    ]);
  };
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodo} />
        <TodosList
          todosArray={todosArray}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          handleUpdateProps={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Home;
