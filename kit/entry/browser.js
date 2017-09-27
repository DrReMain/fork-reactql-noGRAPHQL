import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Root from 'src/root';
import configureStore from 'src/store';

const DOMRoot = document.getElementById('main');
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(initialState, history);


ReactDOM.hydrate(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  DOMRoot
);

if (module.hot) {
  module.hot.accept('src/root', () => {
    const NextRoot = require('src/root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={history}/>
      </AppContainer>,
      DOMRoot
    );
  });
}
