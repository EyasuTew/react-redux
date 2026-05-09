import { createStore } from 'redux';
import rootReducer from './reducers';

/**
 * STEP 5 — THE STORE
 *
 * The store is the single source of truth for the entire application.
 * There is exactly ONE store per Redux app.
 *
 * createStore(reducer) wires everything together:
 *   - Holds the current state tree internally
 *   - Exposes store.getState() to read the state
 *   - Exposes store.dispatch(action) to trigger state changes
 *   - Exposes store.subscribe(listener) to react to changes
 *
 * With React-Redux you never call these directly —
 * useSelector and useDispatch hooks do it for you.
 *
 * Optional: pass Redux DevTools extension for time-travel debugging:
 *   createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
 */
const store = createStore(
  rootReducer,
  // Enable Redux DevTools browser extension if installed
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
