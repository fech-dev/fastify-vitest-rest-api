import Fastify from 'fastify';
import users from './modules/users.js';

export const createApp = (options = {}) => {
  const app = Fastify(options);

  app.register(
    async (_app) => {
      _app.register(users);
    },
    { prefix: '/api' }
  );

  return app;
};
