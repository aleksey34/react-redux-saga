import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";
import {forbiddenWordsMiddleware} from "./middleware/middleware"
import {sagaWatcher} from "./redux/sagas/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer ,
    compose(applyMiddleware(thunk , forbiddenWordsMiddleware, saga ) ,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
);

saga.run(sagaWatcher);


render(
  <React.StrictMode>
      <Provider  store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
