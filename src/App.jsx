import React, { useState } from 'react';
import FlowBar       from './components/FlowBar';
import StoreSnapshot from './components/StoreSnapshot';
import StoreInspector from './components/StoreInspector';
import Counter       from './components/Counter';
import TodoList      from './components/TodoList';
import ActionLog     from './components/ActionLog';
import CodeTabs      from './components/CodeTabs';

/**
 * App — Root Component
 *
 * Coordinates the FlowBar animation across child components.
 * When any child dispatches an action, it calls onDispatch(),
 * which triggers a sequential highlight of each Redux step.
 *
 * All state management happens in Redux — App itself holds
 * only UI-local state (activeNode for the animation).
 */
export default function App() {
  const [activeNode, setActiveNode] = useState(null);

  function triggerFlow() {
    const NODES = ['component', 'action', 'reducer', 'store'];
    NODES.forEach((node, i) => {
      setTimeout(() => setActiveNode(node), i * 150);
    });
    setTimeout(() => setActiveNode(null), NODES.length * 150 + 100);
  }

  return (
    <div className="app-wrapper">
      {/* Header */}
      <div className="app-header">
        <h1>React + Redux</h1>
        <span className="badge">Interactive Demo</span>
      </div>
      <p className="app-subtitle">
        Full working example — counter, todos, action log, store inspector &amp; annotated source.
      </p>

      {/* Store Panel */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-title">Redux store — live state tree</div>
        <StoreSnapshot />
        <StoreInspector />
        <FlowBar activeNode={activeNode} />
      </div>

      {/* Components Grid */}
      <div className="grid" style={{ marginBottom: 16 }}>
        <Counter  onDispatch={triggerFlow} />
        <TodoList onDispatch={triggerFlow} />
        <ActionLog />
      </div>

      {/* Source Code Viewer */}
      <div className="card">
        <div className="card-title">Annotated source code</div>
        <CodeTabs />
      </div>
    </div>
  );
}
