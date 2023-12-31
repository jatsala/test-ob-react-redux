import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AppReduxSaga from './AppReduxSaga';
import reportWebVitals from './reportWebVitals';

// Redux Import 
import { Provider } from 'react-redux';
import { createAppAsyncStore } from './store/config/storeConfig';
// Import Config Function of App Store
// import { createAppStore } from './store/config/storeConfig';


// We create the App Store
// let appStore = createAppStore();
let appAsyncStore = createAppAsyncStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>,
  // document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
