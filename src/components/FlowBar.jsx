import React from 'react';

/**
 * FlowBar
 * Visualises the Redux one-way data-flow cycle.
 * The `activeNode` prop (set by the parent on each dispatch)
 * animates each step in sequence.
 */
const NODES = [
  { id: 'component', step: '1. ui',      name: '⬡ Component' },
  { id: 'action',    step: '2. fires',   name: '⚡ Action'   },
  { id: 'reducer',   step: '3. handles', name: '⚙ Reducer'  },
  { id: 'store',     step: '4. saves',   name: '◈ Store'    },
];

export default function FlowBar({ activeNode }) {
  return (
    <div className="flow-bar">
      {NODES.map((node, i) => (
        <React.Fragment key={node.id}>
          <div className={`flow-node ${activeNode === node.id ? 'active' : ''}`}>
            <span className="flow-node-label">{node.step}</span>
            <span className="flow-node-name">{node.name}</span>
          </div>
          {i < NODES.length - 1 && <span className="flow-arrow">›</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
