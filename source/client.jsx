import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/index';
import './app/style.css'

const Client = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

hydrate(<Client />, document.getElementById('render_target'));
