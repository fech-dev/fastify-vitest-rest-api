const controller = {
  async index() {},
  async get() {},
  async store(request, reply) {
    reply.status(201);
    return {
      message: 'User created successfully!',
      data: {
        id: 1,
        username: 'test@mail.com',
      },
    };
  },
  async update() {},
  async destroy() {},
};

export default async (app) => {
  app.get('/users', controller.index);
  app.get('/users/:id', controller.get);
  app.post('/users', controller.store);
  app.put('/users', controller.update);
  app.delete('/users', controller.destroy);
};
