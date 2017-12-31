import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer'

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[Middleware] Dispatching', action)
//       const result = next(action)
//       console.log('[Middleware] next state', store.getState())
//       return result
//     }
//   }
// }

//const store = createStore(reducer, applyMiddleware(logger))
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
