import React, { useState } from 'react';

const SNIPPETS = {
  'actionTypes.js': `// Action types — plain string constants
export const INCREMENT   = 'INCREMENT';
export const DECREMENT   = 'DECREMENT';
export const RESET       = 'RESET';

export const ADD_TODO    = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';`,

  'actions.js': `import { INCREMENT, ADD_TODO, TOGGLE_TODO } from './actionTypes';

// Action creators — functions returning action objects
export const increment  = ()     => ({ type: INCREMENT });
export const decrement  = ()     => ({ type: DECREMENT });
export const reset      = ()     => ({ type: RESET });

export const addTodo    = (text) => ({
  type:    ADD_TODO,
  payload: { id: Date.now(), text },
});

export const toggleTodo = (id)   => ({
  type:    TOGGLE_TODO,
  payload: id,
});`,

  'reducers.js': `import { combineReducers } from 'redux';

// Pure function: (state, action) => nextState
// NEVER mutate state — always return a new object/array

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    case RESET:     return 0;
    default:        return state;  // always handle default!
  }
}

function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload, done: false }];
    case TOGGLE_TODO:
      return state.map(t =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );
    case REMOVE_TODO:
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
}

// Combines all reducers into a single root reducer
export default combineReducers({ counter: counterReducer, todos: todosReducer });`,

  'store.js': `import { createStore } from 'redux';
import rootReducer from './reducers';

// ONE store per app — holds the entire state tree
const store = createStore(
  rootReducer,
  // Enable Redux DevTools extension if installed:
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

export default store;`,

  'Component.jsx': `import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import { selectCounter } from '../redux/selectors';

export default function Counter() {
  // useSelector — read a slice of state; re-renders on change
  const counter  = useSelector(selectCounter);

  // useDispatch — get the dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}`,

  'index.js': `import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Provider makes the store available to ALL components
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);`,
};

export default function CodeTabs() {
  const [active, setActive] = useState(Object.keys(SNIPPETS)[0]);

  return (
    <div className="code-section">
      <div className="code-tabs">
        {Object.keys(SNIPPETS).map((tab) => (
          <button
            key={tab}
            className={`code-tab ${active === tab ? 'active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="code-block">
        <pre>{SNIPPETS[active]}</pre>
      </div>
    </div>
  );
}
