import http from 'http';
import listen from 'test-listen';
import { apiResolver } from 'next/dist/next-server/server/api-utils';

export async function runTestServer(handler) {
  const server = http.createServer((req, res) => apiResolver(req, res, undefined, handler));
  const url = await listen(server);

  return [server, url];
}

export function stopTestServer(server) {
  server.close();
}
