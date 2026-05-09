import React from 'react';
import { useSelector } from 'react-redux';
import { selectLog } from '../redux/selectors';
import { INCREMENT, DECREMENT, RESET, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../redux/actionTypes';

/**
 * ActionLog Component
 *
 * Shows every dispatched action with its type, payload, and timestamp —
 * similar to the Redux DevTools browser extension.
 *
 * The log slice is managed by logReducer in reducers.js.
 * Every time any action is dispatched, logReducer prepends it to state.log.
 */
const TYPE_CLASS = {
  [INCREMENT]:   'inc',
  [DECREMENT]:   'dec',
  [RESET]:       'reset',
  [ADD_TODO]:    'todo',
  [TOGGLE_TODO]: 'toggle',
  [REMOVE_TODO]: 'remove',
};

export default function ActionLog() {
  const log = useSelector(selectLog);

  return (
    <div className="card" style={{ gridColumn: '1 / -1' }}>
      <div className="card-title">Action log — Redux DevTools</div>
      <div className="log-entries">
        {log.length === 0 && (
          <div className="log-empty">Dispatch an action to see it logged here</div>
        )}

        {log.map((entry, i) => (
          <div className="log-entry" key={i}>
            <span className={`log-type ${TYPE_CLASS[entry.type] || 'reset'}`}>
              {entry.type}
            </span>
            <span className="log-payload">
              {entry.payload !== undefined ? JSON.stringify(entry.payload) : ''}
            </span>
            <span className="log-time">{entry.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
