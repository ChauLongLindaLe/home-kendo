import TrainingSessionRepository from "../../../src/trainingSessionRepository";

export default (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      /* eslint-disable no-case-declarations */
      const trainingSession = new TrainingSessionRepository().find(id);
      /* eslint-enable no-case-declarations */
      if (trainingSession) {
        res.status(200).json(trainingSession);
      } else res.status(404).end();
      break;
    case "DELETE":
      new TrainingSessionRepository().delete(id);
      res.status(204).end();
      break;
    case "PATCH":
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["DELETE", "GET", "PATCH"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
