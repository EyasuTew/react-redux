/**
 * STEP 6 — SELECTORS
 *
 * Selectors are plain functions that read (derive) data from the store.
 * They live here so components never depend on the exact shape of state.
 *
 * If you restructure the store later, you only update selectors —
 * not every component that reads that piece of data.
 *
 * Usage in a component:
 *   const counter = useSelector(selectCounter);
 *   const todos   = useSelector(selectTodos);
 */

export const selectCounter   = (state) => state.counter;
export const selectTodos     = (state) => state.todos;
export const selectLog       = (state) => state.log;
export const selectDoneCount = (state) => state.todos.filter((t) => t.done).length;
export const selectTodoCount = (state) => state.todos.length;
