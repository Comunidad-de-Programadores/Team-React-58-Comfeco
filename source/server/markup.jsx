/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { string } from 'prop-types';
import React from 'react';

const Markup = ({ content, states }) => (
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <title>React</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="stylesheet" href={`${__webpack_public_path__}/styles.css`} />
    </head>
    <body>
      <div id="render_target" dangerouslySetInnerHTML={{ __html: content }} />
      <script src={`${__webpack_public_path__}/app.js`} />
      <script dangerouslySetInnerHTML={{ __html: states }} />
    </body>
  </html>
);

Markup.propTypes = {
  content: string.isRequired,
  states: string.isRequired,
};

export default Markup;
