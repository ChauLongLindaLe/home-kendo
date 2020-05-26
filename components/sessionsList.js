import Layout from "./layout";

export default class SessionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingSessions: [],
      isLoading: false,
      error: null
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.retrieveSessions = this.retrieveSessions.bind(this);
  }

  componentDidMount() {
    this.retrieveSessions();
  }

  retrieveSessions() {
    this.setState({ isLoading: true });
    fetch("/api/training-sessions")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          trainingSessions: data,
          isLoading: false
        })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  handleDelete(id) {
    this.setState({ isLoading: true });
    fetch(`/api/training-sessions/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        this.retrieveSessions();
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { trainingSessions, isLoading, error } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <Layout>
        <main>
          <ul>
            {trainingSessions.map((session) => (
              <li key={session.id}>
                <p>{`${session.duration} - ${session.title}`}</p>
                <button
                  type="button"
                  onClick={() => this.handleDelete(session.id)}
                >
                  <i className="fas fa-dumpster-fire" />
                </button>
              </li>
            ))}
          </ul>
          {error && <p>{error.message}</p>}
        </main>
      </Layout>
    );
  }
}
