import fetch from "isomorphic-unfetch";
import trainingSessions from "../../../../pages/api/training-sessions/[id]";
import TrainingSessionRepository from "../../../../src/trainingSessionRepository";
import { runTestServer, stopTestServer } from "../../../utils/server";

describe("/api/training-sessions/[id]", () => {
  let server;
  let baseUrl;
  const trainingSessionRepository = new TrainingSessionRepository();

  beforeAll(async (done) => {
    [server, baseUrl] = await runTestServer(trainingSessions);
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

  describe("GET", () => {
    it("returns the training session", async () => {
      const trainingSession = trainingSessionRepository.create({
        title: "fish",
        duration: "cheese",
      });

      const url = `${baseUrl}?id=${trainingSession.id}`;
      const response = await fetch(url, { method: "GET" });
      const session = await response.json();

      expect(response.status).toBe(200);
      expect(session).toMatchObject({
        id: trainingSession.id,
        title: "fish",
        duration: "cheese",
      });
    });

    describe("when session does not exist", () => {
      it("returns 404 not found", async () => {
        const url = `${baseUrl}?id=blobby`;
        const response = await fetch(url, { method: "GET" });

        expect(response.status).toBe(404);
      });
    });
  });

  describe("DELETE", () => {
    it("returns 204 no content", async () => {
      const trainingSession = trainingSessionRepository.create({
        title: "fish",
        duration: "cheese",
      });

      const url = `${baseUrl}?id=${trainingSession.id}`;
      const response = await fetch(url, { method: "DELETE" });

      expect(response.status).toBe(204);

      const deletedTrainingSession = trainingSessionRepository.find(
        trainingSession.id
      );
      expect(deletedTrainingSession).toBe(undefined);
    });
  });

  describe("PATCH", () => {
    it("returns 204 no content", async () => {
      const trainingSession = trainingSessionRepository.create({
        title: "fish",
        duration: "cheese",
      });

      const url = `${baseUrl}?id=${trainingSession.id}`;
      const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ duration: "tomato" }),
        headers: { "Content-Type": "application/json" },
      });

      expect(response.status).toBe(204);
      expect(
        trainingSessionRepository.find(trainingSession.id).duration
      ).toEqual("tomato");
    });

    describe("when missing content type header", () => {
      it("returns 400 bad request", async () => {
        const trainingSession = trainingSessionRepository.create({
          title: "fish",
          duration: "cheese",
        });

        const url = `${baseUrl}?id=${trainingSession.id}`;
        const response = await fetch(url, {
          method: "PATCH",
          body: JSON.stringify({ title: "fish", duration: "1 month" }),
        });

        expect(response.status).toBe(400);
      });
    });
  });
});
