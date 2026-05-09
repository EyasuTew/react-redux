import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

/**
 * STEP 7 — MOUNT
 * Wrap the entire app in <Provider store={store}>.
 * This makes the Redux store available to every component
 * in the tree via useSelector / useDispatch hooks.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
