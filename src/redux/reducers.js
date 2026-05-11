import { combineReducers } from 'redux';
import {
  INCREMENT,
  DECREMENT,
  RESET,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  ADD,
  MINUS
} from './actionTypes';

/**
 * STEP 3 — REDUCERS
 *
 * A reducer is a PURE function with this signature:
 *   (currentState, action) => nextState
 *
 * Rules for reducers:
 *  1. Never mutate state directly — always return a NEW object/array.
 *  2. Always handle the `default` case by returning the current state.
 *  3. No side effects (no API calls, no Date.now(), no Math.random()).
 *  4. The same input ALWAYS produces the same output (pure function).
 *
 * Redux calls EVERY reducer on EVERY dispatch.
 * Each reducer is only responsible for its own slice of state.
 */

// ── Counter Reducer ────────────────────────────────────────────
// Manages state.counter — a single number
const initialCounterState = 0;

function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;           // returns a NEW number (immutable)

    case DECREMENT:
      return state - 1;

    case ADD:
      return state + Number(action.payload.amount);
    
    case MINUS:
      return state - Number(action.payload.amount);

    case RESET:
      return 0;

    default:
      return state;               // unknown action → return unchanged state
  }
}

// ── Todos Reducer ──────────────────────────────────────────────
// Manages state.todos — an array of todo objects
const initialTodosState = [];

function todosReducer(state = initialTodosState, action) {
  switch (action.type) {
    case ADD_TODO:
      // Spread creates a NEW array — never push() directly on state
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, done: false },
      ];

    case TOGGLE_TODO:
      // .map() returns a NEW array; spread creates a NEW todo object
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    case REMOVE_TODO:
      // .filter() returns a NEW array
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_TODO:
      // .filter() returns a NEW array
      return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        );
        
    default:
      return state;
  }
}

// ── Log Reducer ────────────────────────────────────────────────
// Manages state.log — records every dispatched action (like DevTools)
function logReducer(state = [], action) {
  // Skip Redux's internal init action
  if (action.type.startsWith('@@redux')) return state;

  const entry = {
    type:    action.type,
    payload: action.payload,
    time:    new Date().toLocaleTimeString(),
  };

  // Keep the 30 most recent entries; newest first
  return [entry, ...state].slice(0, 30);
}

/**
 * STEP 4 — COMBINE REDUCERS
 *
 * combineReducers merges all slice reducers into one root reducer.
 * The key names here become the keys in the global state object:
 *
 *   state = {
 *     counter: 0,
 *     todos:   [],
 *     log:     [],
 *   }
 *
 * Redux calls rootReducer(state, action) on every dispatch,
 * which calls each slice reducer with its own slice of state.
 */
const rootReducer = combineReducers({
  counter: counterReducer,
  todos:   todosReducer,
  log:     logReducer,
});

export default rootReducer;
