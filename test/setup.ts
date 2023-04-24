import { afterAll } from 'vitest';
import supertest from 'supertest';
import { createApp } from '../src/app.js';

export const setup = async () => {
  const fastify = createApp({
    logger: false,
  });

  await fastify.ready();

  const http = supertest(fastify.server);

  afterAll(async () => {
    if (fastify) await fastify.close();
  });

  return { fastify, http };
};
