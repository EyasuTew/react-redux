import {
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  ADD
} from './actionTypes';

/**
 * STEP 2 — ACTION CREATORS
 *
 * Action creators are plain functions that return action objects.
 * An action object MUST have a `type` field.
 * It MAY have a `payload` field carrying extra data.
 *
 * Instead of writing:
 *   dispatch({ type: 'ADD_TODO', payload: { id: 1, text: 'Buy milk' } })
 *
 * You call:
 *   dispatch(addTodo('Buy milk'))
 *
 * This centralises the action shape in one place — if the shape
 * changes, you fix it here and every component benefits.
 */

// ── Counter actions ────────────────────────────────────────────
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const add = (amount) => ( {type: ADD, payload: {amount: amount}});
export const reset     = () => ({ type: RESET });

// ── Todo actions ───────────────────────────────────────────────
export const addTodo    = (text) => ({
  type:    ADD_TODO,
  payload: { id: Date.now(), text },
});

export const toggleTodo = (id) => ({
  type:    TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id) => ({
  type:    REMOVE_TODO,
  payload: id,
});


export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  payload: {id, text} 
});
