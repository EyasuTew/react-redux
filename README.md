# React + Redux Interactive Demo

A complete, fully-commented React + Redux application demonstrating every layer of the Redux architecture.

## Project Structure

```
src/
├── index.js                  # Entry point — mounts app with <Provider>
├── App.jsx                   # Root component — coordinates UI
├── index.css                 # Global styles
│
├── redux/
│   ├── actionTypes.js        # STEP 1 — String constants for action types
│   ├── actions.js            # STEP 2 — Action creator functions
│   ├── reducers.js           # STEP 3 & 4 — Pure reducers + combineReducers
│   ├── store.js              # STEP 5 — createStore (single source of truth)
│   └── selectors.js          # STEP 6 — Functions to read from state
│
└── components/
    ├── Counter.jsx            # STEP 7 — useSelector + useDispatch example
    ├── TodoList.jsx           # STEP 7 — Array state management example
    ├── FlowBar.jsx            # Visualises the Redux data-flow cycle
    ├── StoreInspector.jsx     # Live pretty-printed state tree
    ├── StoreSnapshot.jsx      # Metric cards from the store
    ├── ActionLog.jsx          # DevTools-style action history
    └── CodeTabs.jsx           # Annotated source snippets
```

## How Redux Works

```
UI Component
    → dispatch(action)           // "Something happened"
        → rootReducer(state, action) → nextState   // "Here's what changed"
            → store.setState(nextState)             // "State updated"
                → useSelector re-renders components // "UI reflects new state"
```

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## The 7 Redux Layers (in order)

| File | Layer | Purpose |
|---|---|---|
| `actionTypes.js` | Action Types | String constants — prevent typos |
| `actions.js` | Action Creators | Functions returning action objects |
| `reducers.js` | Reducers | Pure functions: `(state, action) => nextState` |
| `reducers.js` | combineReducers | Merges slice reducers into one root reducer |
| `store.js` | Store | `createStore()` — single source of truth |
| `selectors.js` | Selectors | Functions to read/derive data from state |
| `*.jsx` | Components | `useSelector` (read) + `useDispatch` (write) |

## Key Rules

1. **State is read-only** — never mutate it directly
2. **Reducers must be pure** — same input always gives same output
3. **One store per app** — single source of truth
4. **Actions describe what happened** — not how to change state
