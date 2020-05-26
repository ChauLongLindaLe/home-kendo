import fetch from "isomorphic-unfetch";
import trainingSessions from "../../../pages/api/training-sessions";
import TrainingSessionRepository from "../../../src/trainingSessionRepository";
import { runTestServer, stopTestServer } from "../../utils/server";

describe("/api/training-sessions", () => {
  let server;
  let url;

  beforeAll(async (done) => {
    [server, url] = await runTestServer(trainingSessions);
    done();
  });

  beforeEach(() => {
    const repository = new TrainingSessionRepository();
    repository.reset();
  });

  afterEach(() => {
    const repository = new TrainingSessionRepository();
    repository.reset();
  });

  afterAll((done) => {
    stopTestServer(server);
    done();
  });

  describe("POST", () => {
    it("returns 200 status", async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ title: "fish", duration: "1 month" }),
        headers: { "Content-Type": "application/json" },
      });
      const trainingSession = await response.json();

      expect(response.status).toBe(200);
      expect(trainingSession).toMatchObject({
        id: expect.any(String),
        title: "fish",
        duration: "1 month",
      });
    });

    describe("when missing content type header", () => {
      it("returns 400 bad request", async () => {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({ title: "fish", duration: "1 month" }),
        });

        expect(response.status).toBe(400);
      });
    });
  });

  describe("GET", () => {
    it("returns the list of training sessions", async () => {
      new TrainingSessionRepository().create({
        title: "fish",
        duration: "cheese",
      });
      new TrainingSessionRepository().create({
        title: "linda",
        duration: "ham",
      });
      const response = await fetch(url, { method: "GET" });
      const sessions = await response.json();

      expect(response.status).toBe(200);

      expect(sessions[0]).toMatchObject({
        id: expect.any(String),
        title: "fish",
        duration: "cheese",
      });
      expect(sessions[1]).toMatchObject({
        id: expect.any(String),
        title: "linda",
        duration: "ham",
      });
    });
  });
});
