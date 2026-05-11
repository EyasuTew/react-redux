/**
 * STEP 1 — ACTION TYPES
 *
 * Action types are plain string constants that describe
 * "what happened" in the application.
 *
 * Using constants (instead of raw strings) prevents typos:
 *   dispatch({ type: 'INCRMENT' })  ← typo silently does nothing
 *   dispatch({ type: INCREMENT })   ← JS error catches the bug immediately
 */

export const INCREMENT   = 'INCREMENT';
export const DECREMENT   = 'DECREMENT';
export const ADD = 'ADD';
export const MINUS = 'MINUS';
export const RESET       = 'RESET';

export const ADD_TODO    = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
