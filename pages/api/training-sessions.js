export default (req, res) => {
  const { method } = req;
  const fakeTrainingSessions = [
    { id: 1, title: "blobby", duration: "5 milliseconds" },
    { id: 2, title: "bobbly", duration: "5 years" },
    { id: 3, title: "linda", duration: "1 second" },
    { id: 4, title: "lindor", duration: "1 week" },
    { id: 5, title: "old warmface", duration: "5 days" },
  ];

  switch (method) {
    case "POST":
      res.status(201).end();
      break;
    case "GET":
      res.status(200).json(fakeTrainingSessions);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
