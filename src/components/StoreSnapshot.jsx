import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter, selectTodoCount, selectDoneCount } from '../redux/selectors';

/**
 * StoreSnapshot
 * Shows three live metrics derived from the store.
 * Each useSelector call subscribes to only the data it needs,
 * so the component only re-renders when those values change.
 */
export default function StoreSnapshot() {
  const counter   = useSelector(selectCounter);
  const todoCount = useSelector(selectTodoCount);
  const doneCount = useSelector(selectDoneCount);

  return (
    <div className="snapshot-grid">
      <div className="snapshot-cell">
        <div className="snapshot-label">counter</div>
        <div className="snapshot-value c-accent">{counter}</div>
      </div>
      <div className="snapshot-cell">
        <div className="snapshot-label">todos</div>
        <div className="snapshot-value c-yellow">{todoCount}</div>
      </div>
      <div className="snapshot-cell">
        <div className="snapshot-label">done</div>
        <div className="snapshot-value c-green">{doneCount}</div>
      </div>
    </div>
  );
}
