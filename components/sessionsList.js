import Link from "next/link";
import Layout from "./layout";

export default class SessionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingSessions: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("/api/training-sessions")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ trainingSessions: data, isLoading: false })
      )
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
              </li>
            ))}
          </ul>
          {error && <p>{error.message}</p>}
        </main>
      </Layout>
    );
  }
}
