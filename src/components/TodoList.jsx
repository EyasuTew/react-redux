import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../redux/selectors';
import { addTodo, toggleTodo, removeTodo, updateTodo } from '../redux/actions';

export default function TodoList({ onDispatch }) {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  // edit state
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  function handleAdd() {
    const trimmed = text.trim();

    if (!trimmed) return;

    dispatch(addTodo(trimmed));
    setText('');

    onDispatch();
  }

  function handleToggle(id) {
    dispatch(toggleTodo(id));
    onDispatch();
  }

  function handleRemove(id) {
    dispatch(removeTodo(id));
    onDispatch();
  }

  function handleUpdate(id, newText) {
    const trimmed = newText.trim();

    if (!trimmed) return;

    dispatch(updateTodo(id, trimmed));

    // exit edit mode
    setEditId(null);
    setEditText('');

    onDispatch();
  }

  function startEditing(todo) {
    setEditId(todo.id);
    setEditText(todo.text);
  }

  return (
    <div className="card">
      <div className="card-title">Todo component</div>

      {/* Add Todo */}
      <div className="todo-input-row">
        <input
          className="todo-input"
          placeholder="Add a task and press Enter..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />

        <button className="btn btn-green" onClick={handleAdd}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {todos.length === 0 && (
          <div
            style={{
              fontSize: 12,
              color: 'var(--muted)',
              textAlign: 'center',
              padding: '12px 0',
            }}
          >
            No tasks yet — add one above
          </div>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.done ? 'done' : ''}`}
            onClick={() => handleToggle(todo.id)}
          >
            <div className={`todo-check ${todo.done ? 'checked' : ''}`}>
              {todo.done && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5 3.5-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            {/* TEXT OR INPUT */}
            {editId === todo.id ? (
              <input
                value={editText}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => setEditText(e.target.value)}
                className="todo-input"
                autoFocus
              />
            ) : (
              <span className="todo-text">{todo.text}</span>
            )}

            {/* DELETE */}
            <button
              className="todo-del"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(todo.id);
              }}
            >
              ×
            </button>

            {/* EDIT / SAVE */}
            {editId === todo.id ? (
              <button
                className="todo-del"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdate(todo.id, editText);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="todo-del"
                onClick={(e) => {
                  e.stopPropagation();
                  startEditing(todo);
                }}
              >
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}