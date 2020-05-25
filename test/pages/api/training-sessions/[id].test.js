import fetch from 'isomorphic-unfetch';
import trainingSessions from '../../../../pages/api/training-sessions/[id]';
import { runTestServer, stopTestServer } from '../../../utils/server';

describe('/api/training-sessions/[id]', () => {
  let server;
  let baseUrl;

  beforeAll(async (done) => {
    [server, baseUrl] = await runTestServer(trainingSessions);
    done();
  });

  afterAll((done) => {
    stopTestServer(server);
    done();
  });

  describe('GET', () => {
    it('returns the training session', async () => {
      const url = `${baseUrl}?id=123`;
      const response = await fetch(url, { method: 'GET' });
      const trainingSession = await response.json();

      expect(response.status).toBe(200);
      expect(trainingSession).toMatchObject({
        id: '123',
        title: expect.any(String),
        duration: expect.any(String),
      });
    });
  });

  describe('DELETE', () => {
    it('returns 204 no content', async () => {
      const url = `${baseUrl}?id=123`;
      const response = await fetch(url, { method: 'DELETE' });

      expect(response.status).toBe(204);
    });
  });

  describe('PATCH', () => {
    it('returns 204 no content', async () => {
      const url = `${baseUrl}?id=123`;
      const response = await fetch(url, { method: 'PATCH' });

      expect(response.status).toBe(204);
    });
  });
});
