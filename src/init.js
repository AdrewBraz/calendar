// @ts-check
import React from 'react';
import { render } from 'react-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: reducers,
  middleware: customizedMiddleware,
});

export default () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
