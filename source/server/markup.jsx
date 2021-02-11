/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { string } from 'prop-types';
import React from 'react';

const Markup = ({ content }) => (
  <html lang="es">
    <head>
      <title>React</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={`${__webpack_public_path__}/main.css`} />
    </head>
    <body>
      <div id="render_target" dangerouslySetInnerHTML={{ __html: content }} />
      <script src={`${__webpack_public_path__}/app.js`} />
    </body>
  </html>
);

Markup.propTypes = {
  content: string.isRequired,
};

export default Markup;
