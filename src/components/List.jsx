import { useEffect, useState } from "react";

const List = () => {
  const [todos, setTodos] = useState([]);

  function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        debugger
        <div key={todo.id} style={{ padding: 30, border: "1px solid black" }}>
          {todo.title}
        </div>;
      })}
    </div>
  );
};

export default List;
