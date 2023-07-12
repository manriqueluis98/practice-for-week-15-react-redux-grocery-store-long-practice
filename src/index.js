import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';

import { populateProduce } from './store/produce';


const store = configureStore()

if(process.env.NODE_ENV !== 'production'){
  window.store = store
  window.populateProduce = populateProduce
}

function Root() {
  return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Root />
  </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);