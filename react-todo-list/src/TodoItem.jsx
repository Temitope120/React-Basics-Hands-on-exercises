export default function TodoItem({ completed, id, title, toggleTodo, deleteTodos }) {
  return (
    <li >
      <label>
        <input
          type="checkbox"
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={completed}
        />
        {title}
      </label>
      <button
          onClick={() => deleteTodos(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
