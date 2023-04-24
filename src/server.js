import { createApp } from './app.js';

const fastify = createApp({
  logger: true,
});

(async (fastify) => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})(fastify);
