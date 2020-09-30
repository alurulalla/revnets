import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-calendar/dist/Calendar.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './app/store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';
import 'react-toastify/dist/ReactToastify.min.css';
// import { loadEvents } from './features/events/eventActions';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

// store.dispatch(loadEvents());

const roolEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <App />
      </ConnectedRouter>
      {/* <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter> */}
    </Provider>,
    roolEl
  );
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function () {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
