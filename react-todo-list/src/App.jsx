import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState( () => {
    const localValue = localStorage.getItem('items')
    if(localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(()=> {
    localStorage.setItem('items', JSON.stringify(todos))
  })

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });

    console.log(todos);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodos(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1>Todo List</h1>
      <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>
    </>
  );
}
