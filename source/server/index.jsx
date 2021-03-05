/* eslint-disable consistent-return */
import express from 'express';
import { renderToStaticMarkup } from 'react-dom/server';
import { renderToStringAsync } from 'react-fetch-ssr';
import React from 'react';
import { StaticRouter } from 'react-router';
import App from 'app/index';
import cookieParser from 'cookie-parser';
import Markup from './markup';

const server = express();

server.use(cookieParser());

const handleRequest = async (request, response) => {
  const context = {};

  if (request.cookies && request.cookies.session) {
    const session = JSON.parse(request.cookies.session);
    context.session = session;
  }

  const { content, states } = await renderToStringAsync(
    <StaticRouter location={request.url} context={context}>
      <App />
    </StaticRouter>
  );

  const fullHtml = renderToStaticMarkup(<Markup content={content} states={states} />);
  response.write(fullHtml);
  response.end();
};

server.all('*', handleRequest);

server.listen(3000, () => {
  console.log('server render stared at port 3000');
});
