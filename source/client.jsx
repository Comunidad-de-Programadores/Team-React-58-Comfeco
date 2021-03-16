/* eslint-disable no-undef */
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/index';
import './app/style.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}
console.log(process.env.NODE_ENV);

const Client = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

hydrate(<Client />, document.getElementById('render_target'));
