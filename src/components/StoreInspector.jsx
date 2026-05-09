import React from 'react';
import { useSelector } from 'react-redux';

/**
 * StoreInspector
 * Pretty-prints the current Redux state tree as syntax-highlighted JSON.
 * Uses useSelector to subscribe to the entire state — re-renders on every change.
 */
export default function StoreInspector() {
  // Read the full state (excluding log to keep it compact)
  const counter = useSelector((s) => s.counter);
  const todos   = useSelector((s) => s.todos);

  const display = { counter, todos };
  const json    = JSON.stringify(display, null, 2);

  // Minimal syntax highlighting via regex
  const highlighted = json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      if (/^"/.test(match)) {
        return /:$/.test(match)
          ? `<span class="json-key">${match}</span>`
          : `<span class="json-str">${match}</span>`;
      }
      if (/true|false|null/.test(match)) return `<span class="json-bool">${match}</span>`;
      return `<span class="json-num">${match}</span>`;
    }
  );

  return (
    <div className="store-inspector">
      <pre dangerouslySetInnerHTML={{ __html: highlighted }} />
    </div>
  );
}
