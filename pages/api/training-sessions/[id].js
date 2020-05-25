export default (req, res) => {
  const { query: { id }, method } = req;
  const fakeTrainingSession = {
    id, title: 'blobby', duration: '1 week',
  };

  switch (method) {
    case 'GET':
      res.status(200).json(fakeTrainingSession);
      break;
    case 'DELETE':
      res.status(204).end();
      break;
    case 'PATCH':
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['DELETE', 'GET', 'PATCH']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
