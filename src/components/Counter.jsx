import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCounter } from '../redux/selectors';
import { increment, decrement, reset, add } from '../redux/actions';

/**
 * Counter Component
 *
 * STEP 7 — COMPONENTS (reading & writing the store)
 *
 * useSelector(selector) — subscribes to a slice of Redux state.
 *   Re-renders this component whenever that slice changes.
 *
 * useDispatch() — returns the store's dispatch function.
 *   Calling dispatch(action) triggers the Redux cycle:
 *     dispatch → rootReducer → new state → re-render
 *
 * This component knows nothing about WHERE the counter lives —
 * it just reads from and writes to the store.
 */
export default function Counter({ onDispatch }) {
  const counter  = useSelector(selectCounter);   // read from store
  const dispatch = useDispatch();                // get dispatch function
  const [flash, setFlash] = useState('');
  const [addAmount, setAddAmount] = useState(0);

  function handle(actionCreator, flashClass) {
    dispatch(actionCreator());   // dispatch the action to the store
    onDispatch();                // notify parent to animate FlowBar
    if (flashClass) {
      setFlash(flashClass);
      setTimeout(() => setFlash(''), 350);
    }
  }

  function addHandler() {
    if (!addAmount.trim()) return;

    console.log(addAmount);
    dispatch(add(addAmount));
    setAddAmount(0);
  }

  return (
    <div className="card">
      <div className="card-title">Counter component</div>

      {/* Displays state.counter from the Redux store */}
      <div className={`counter-display ${flash}`}>{counter}</div>

      <div className="counter-btns">
        <button className="btn btn-lg" onClick={() => handle(decrement, 'dec')}>−</button>
        <button className="btn btn-lg" onClick={() => handle(increment, 'inc')}>+</button>

        <input
          type="number"
          className="todo-input"
          placeholder="Enter something..."
          value={addAmount}
          onChange={(e) => setAddAmount(e.target.value)}
        />

        <button className="btn btn-lg" onClick={addHandler}>
          Add
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="btn btn-ghost" onClick={() => handle(reset, '')}>↺ reset</button>
      </div>
    </div>
  );
}
