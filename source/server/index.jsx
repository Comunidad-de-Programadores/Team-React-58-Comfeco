/* eslint-disable consistent-return */
import { createServer } from 'http';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderToStringAsync } from 'react-fetch-ssr';
import React from 'react';
import { StaticRouter } from 'react-router';
import App from 'app/index';
import Markup from './markup';

const handleRequest = async (request, response) => {
  const { content, states } = await renderToStringAsync(
    <StaticRouter location={request.url}>
      <App />
    </StaticRouter>,
  );

  const fullHtmp = renderToStaticMarkup(<Markup content={content} states={states} />);
  response.write(fullHtmp);
  response.end();
};

const server = createServer(handleRequest);

server.listen(3000, () => {
  console.log('server render stared at port 3000');
});
