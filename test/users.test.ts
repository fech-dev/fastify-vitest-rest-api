import { describe, expect, test } from 'vitest';
import { setup } from './setup';

describe('Users API', async () => {
  const { http } = await setup();

  test('Can create a user', async () => {
    const response = await http
      .post('/api/users')
      .send({
        username: 'test@mail.com',
        password: 'password',
      })
      .expect(201);

    const { data } = response.body;
    expect(data.id).not.toBeNull();
    expect(data.username).toBe('test@mail.com');
    expect(data.password).toBeUndefined();
  });
});
