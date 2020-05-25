import fetch from "isomorphic-unfetch";
import trainingSessions from "../../../pages/api/training-sessions";
import { runTestServer, stopTestServer } from "../../utils/server";

describe("/api/training-sessions", () => {
  let server;
  let url;

  beforeAll(async (done) => {
    [server, url] = await runTestServer(trainingSessions);
    done();
  });

  afterAll((done) => {
    stopTestServer(server);
    done();
  });

  describe("POST", () => {
    it("returns 201 status", async () => {
      const response = await fetch(url, { method: "POST" });

      expect(response.status).toBe(201);
    });
  });

  describe("GET", () => {
    it("returns the list of training sessions", async () => {
      const response = await fetch(url, { method: "GET" });
      const jsonResult = await response.json();

      expect(response.status).toBe(200);

      jsonResult.forEach((trainingSession) => {
        expect(trainingSession).toMatchObject({
          id: expect.any(Number),
          title: expect.any(String),
          duration: expect.any(String),
        });
      });
    });
  });
});
