/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { string } from 'prop-types';
import React from 'react';

const Markup = ({ content, states }) => (
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="stylesheet" href={`${__webpack_public_path__}/styles.css`} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <title>React</title>
    </head>
    <body>
      <div id="render_target" dangerouslySetInnerHTML={{ __html: content }} />
      <script src={`${__webpack_public_path__}app.js`} />
      <script dangerouslySetInnerHTML={{ __html: states }} />
    </body>
  </html>
);

Markup.propTypes = {
  content: string.isRequired,
  states: string.isRequired,
};

export default Markup;
