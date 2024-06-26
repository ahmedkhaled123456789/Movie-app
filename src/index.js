import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
          <BrowserRouter>
    <App />
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);

