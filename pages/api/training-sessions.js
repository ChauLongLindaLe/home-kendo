import TrainingSessionRepository from "../../src/trainingSessionRepository";

export default (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      if (req.headers["content-type"] === "application/json") {
        /* eslint-disable no-case-declarations */
        const trainingSession = new TrainingSessionRepository().create(
          req.body
        );
        /* eslint-enable no-case-declarations */
        res.status(200).json(trainingSession);
      } else res.status(400).end();
      break;
    case "GET":
      res.status(200).json(new TrainingSessionRepository().findAll());
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
