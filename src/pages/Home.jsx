import { useEffect, useState } from 'react';
import TodosList from '../components/TodosList';
import Header from '../components/Header';
import InputTodo from '../components/InputTodo';

const Home = () => {
  // Each todo is of the form:
  // todo={id: number, title: string, completed: boolean}

  const getInitialTodos = () => {
    const savedData = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(savedData);
    return parsedTodos || [];
  };

  const [todosArray, setTodosArray] = useState(getInitialTodos());

  // Load todos from localStorage if any is found
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (data) {
      setTodosArray(data);
    }
  }, []);

  // Save todosArray to local storage and track all changes made to it
  useEffect(() => {
    const data = JSON.stringify(todosArray);
    localStorage.setItem('todos', data);
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
    if (value) {
      setTodosArray([
        ...todosArray,
        { id: Date.now(), title: value.trim(), completed: false },
      ]);
    } else {
      alert('enter something');
    }
  };

  // Delete todo from the array
  const deleteTodo = (id) => {
    setTodosArray([
      // Note that the spread operator created a brand new object
      // thus we're not mutating the state directly
      ...todosArray.filter((todo) => todo.id !== id),
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
